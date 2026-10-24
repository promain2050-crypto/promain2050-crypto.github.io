        (function () {
            var reveals = document.querySelectorAll('.reveal');
            var counters = document.querySelectorAll('.num[data-target]');

            if (!('IntersectionObserver' in window)) {
                reveals.forEach(function (el) { el.classList.add('visible'); });
                counters.forEach(function (el) {
                    el.textContent = el.dataset.target + (el.dataset.suffix || '');
                });
                return;
            }

            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                });
            }, { threshold: 0.15 });
            reveals.forEach(function (el) { io.observe(el); });

            var cio = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    var el = entry.target;
                    var target = parseInt(el.dataset.target, 10);
                    var suffix = el.dataset.suffix || '';
                    var duration = 1300;
                    var start = performance.now();

                    function tick(now) {
                        var p = Math.min((now - start) / duration, 1);
                        var eased = 1 - Math.pow(1 - p, 3);
                        el.textContent = Math.round(target * eased) + suffix;
                        if (p < 1) requestAnimationFrame(tick);
                    }
                    requestAnimationFrame(tick);
                    cio.unobserve(el);
                });
            }, { threshold: 0.5 });
            counters.forEach(function (el) { cio.observe(el); });
        })();