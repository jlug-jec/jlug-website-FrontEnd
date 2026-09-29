document.documentElement.classList.add("js");

const ICONS = {
    github:
        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
    linkedin:
        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.99 1.83-2.04 3.77-2.04 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.45-2.16 2.96V21h-4V9Z"/></svg>',
    twitter:
        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    x:
        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    website:
        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.04c.83 1.2 1.48 2.59 1.91 3.96h-3.82c.43-1.37 1.08-2.76 1.91-3.96zM4.26 14a7.82 7.82 0 0 1 0-4h3.38a16.7 16.7 0 0 0-.1 2c0 .68.03 1.35.1 2H4.26zm.81 2h2.95c.32 1.3.8 2.51 1.38 3.56A8.03 8.03 0 0 1 5.07 16zm2.95-8H5.07a8.03 8.03 0 0 1 4.45-3.56C8.94 5.49 8.46 6.7 8.14 8zm4.03 11.96c-.83-1.2-1.48-2.59-1.91-3.96h3.82c-.43 1.37-1.08 2.76-1.91 3.96zM14.34 14h-4.68a14.7 14.7 0 0 1-.16-2c0-.68.05-1.35.16-2h4.68c.11.65.16 1.32.16 2 0 .68-.05 1.35-.16 2zm.19 5.56c.58-1.05 1.06-2.26 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14a16.7 16.7 0 0 0 .1-2c0-.68-.03-1.35-.1-2h3.38a7.82 7.82 0 0 1 0 4h-3.38z"/></svg>'
};

let allMembers = [];
let expandedCard = null;
let pullBounceY = 0;
let pullVelocity = 0;

async function loadTeam() {
    const grid = document.getElementById("team-grid");

    try {
        const response = await fetch("team.json");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        allMembers = await response.json();

        grid.innerHTML = "";
        grid.dataset.state = "ready";
        
        allMembers.forEach((member, idx) => {
            const cardNode = buildCard(member, idx);
            grid.appendChild(cardNode);
        });

        updateFilterCounts(allMembers);
        setupFilterBar();
        setupGlobalListeners();
        setupScrollGlider();
        observeCards();
    } catch (err) {
        grid.dataset.state = "error";
        grid.innerHTML = `<p class="team-grid__status" role="alert">
      Couldn't load the team data. If you opened this file directly in a
      browser, run it through a local server instead (fetch() needs
      http:// not file://) — for example <code>npx serve</code> or <code>python -m http.server</code>.
    </p>`;
        console.error("Failed to load team.json:", err);
    }
}

function buildCard(member, index) {
    const template = document.getElementById("member-card-template");
    const node = template.content.cloneNode(true);

    const card = node.querySelector(".card");
    const photo = node.querySelector(".card__photo");
    const name = node.querySelector(".card__name");
    const role = node.querySelector(".card__role");
    const bio = node.querySelector(".card__bio");
    const toggle = node.querySelector(".card__toggle");
    const socials = node.querySelector(".card__socials");
    const bioPanelId = `bio-${member.id}`;

    card.style.setProperty("--index", index);
    card.dataset.category = member.category || "engineering";

    photo.src = member.image;
    photo.alt = member.name;
    name.textContent = member.name;
    role.textContent = member.role;
    bio.textContent = member.bio;

    node.querySelector(".card__bio-panel").id = bioPanelId;
    toggle.setAttribute("aria-controls", bioPanelId);
    toggle.setAttribute("aria-label", `Show bio for ${member.name}`);

    if (member.socials) {
        Object.entries(member.socials).forEach(([platform, url]) => {
            const iconSvg = ICONS[platform.toLowerCase()] || ICONS.website;
            if (!iconSvg) return;
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.setAttribute("aria-label", `${member.name} on ${platform}`);
            a.innerHTML = iconSvg;
            li.appendChild(a);
            socials.appendChild(li);
        });
    }

    // Mouse tracking for interactive card spotlight glow
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });

    card.addEventListener("click", (event) => {
        // Prevent toggle if clicking social links inside card
        if (event.target.closest("a")) return;
        toggleSpotlight(card, toggle, member.name);
    });

    toggle.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleSpotlight(card, toggle, member.name);
    });

    card.addEventListener("keydown", (event) => {
        if ((event.key === "Enter" || event.key === " ") && event.target === card) {
            event.preventDefault();
            toggleSpotlight(card, toggle, member.name);
        }
    });

    return node;
}

function toggleSpotlight(card, toggle, memberName) {
    if (card === expandedCard) {
        collapseSpotlight(card, toggle, memberName);
    } else {
        if (expandedCard) {
            const prevToggle = expandedCard.querySelector(".card__toggle");
            const prevName = expandedCard.querySelector(".card__name")?.textContent || "";
            collapseSpotlight(expandedCard, prevToggle, prevName);
        }
        expandSpotlight(card, toggle, memberName);
    }
}

function expandSpotlight(card, toggle, memberName) {
    const backdrop = document.getElementById("spotlight-backdrop");
    const glider = document.getElementById("penguin-glider");
    const ropeCanvas = document.getElementById("rope-canvas");
    const grid = document.getElementById("team-grid");

    // 1. First: Measure starting bounding rect in grid
    const first = card.getBoundingClientRect();

    // 2. Last: Apply classes and measure expanded rect
    card.classList.add("is-expanded", "is-active");
    backdrop.classList.add("is-visible");
    if (glider) glider.classList.add("is-ducked");
    if (ropeCanvas) ropeCanvas.classList.add("is-ducked");
    if (grid) {
        grid.setAttribute("inert", "");
        grid.setAttribute("aria-hidden", "true");
    }

    const last = card.getBoundingClientRect();

    // 3. Invert: Compute transform deltas
    const dx = (first.left + first.width / 2) - (last.left + last.width / 2);
    const dy = (first.top + first.height / 2) - (last.top + last.height / 2);
    const sx = first.width / last.width;
    const sy = first.height / last.height;

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isReduced) {
        card.style.transition = "none";
        card.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
        void card.offsetWidth; // Force reflow
        card.style.transition = "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)";
        card.style.transform = "none";
    }

    expandedCard = card;
    if (toggle) {
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", `Close bio for ${memberName}`);
        toggle.focus();
    }
}

function collapseSpotlight(card, toggle, memberName) {
    if (!card) return;
    const backdrop = document.getElementById("spotlight-backdrop");
    const glider = document.getElementById("penguin-glider");
    const ropeCanvas = document.getElementById("rope-canvas");
    const grid = document.getElementById("team-grid");

    const first = card.getBoundingClientRect();

    // Temporarily remove expanded class to find target grid position
    card.classList.remove("is-expanded");
    const last = card.getBoundingClientRect();

    // Re-apply expanded class to calculate inverse transform
    card.classList.add("is-expanded");

    const dx = (last.left + last.width / 2) - (first.left + first.width / 2);
    const dy = (last.top + last.height / 2) - (first.top + first.height / 2);
    const sx = last.width / first.width;
    const sy = last.height / first.height;

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    backdrop.classList.remove("is-visible");
    if (glider) glider.classList.remove("is-ducked");
    if (ropeCanvas) ropeCanvas.classList.remove("is-ducked");

    const finishCollapse = () => {
        card.classList.remove("is-expanded", "is-active");
        card.style.transform = "";
        card.style.transition = "";

        if (grid) {
            grid.removeAttribute("inert");
            grid.removeAttribute("aria-hidden");
        }

        if (toggle) {
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", `Show bio for ${memberName}`);
            toggle.focus();
        }
    };

    if (isReduced) {
        finishCollapse();
    } else {
        card.style.transition = "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1)";
        card.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
        setTimeout(finishCollapse, 350);
    }

    expandedCard = null;
}

function setupGlobalListeners() {
    window.addEventListener("mousemove", (e) => {
        document.documentElement.style.setProperty("--bg-mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--bg-mouse-y", `${e.clientY}px`);
        updatePupilTracking(e.clientX, e.clientY);
    }, { passive: true });

    const backdrop = document.getElementById("spotlight-backdrop");
    if (backdrop) {
        backdrop.addEventListener("click", () => {
            if (expandedCard) {
                const toggle = expandedCard.querySelector(".card__toggle");
                const name = expandedCard.querySelector(".card__name")?.textContent || "";
                collapseSpotlight(expandedCard, toggle, name);
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && expandedCard) {
            const toggle = expandedCard.querySelector(".card__toggle");
            const name = expandedCard.querySelector(".card__name")?.textContent || "";
            collapseSpotlight(expandedCard, toggle, name);
        }
    });

    const penguin = document.getElementById("penguin");
    if (penguin) {
        penguin.addEventListener("click", () => {
            penguin.classList.remove("is-waddling");
            void penguin.offsetWidth;
            penguin.classList.add("is-waddling");
            
            // Add springy rope pull impulse!
            pullVelocity = 32;
        });
    }
}

function updatePupilTracking(mouseX, mouseY) {
    const pupilLeft = document.getElementById("pupil-left");
    const pupilRight = document.getElementById("pupil-right");
    const penguin = document.getElementById("penguin");
    if (!pupilLeft || !pupilRight || !penguin) return;

    const rect = penguin.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;
    const dist = Math.hypot(dx, dy);

    if (dist < 1) return;

    const maxOffset = 2.2;
    const offsetX = (dx / dist) * Math.min(maxOffset, dist * 0.05);
    const offsetY = (dy / dist) * Math.min(maxOffset, dist * 0.05);

    pupilLeft.setAttribute("cx", (43.5 + offsetX).toFixed(2));
    pupilLeft.setAttribute("cy", (35 + offsetY).toFixed(2));
    pupilRight.setAttribute("cx", (56.5 + offsetX).toFixed(2));
    pupilRight.setAttribute("cy", (35 + offsetY).toFixed(2));
}

function setupScrollGlider() {
    const glider = document.getElementById("penguin-glider");
    const ropeCanvas = document.getElementById("rope-canvas");
    const ropePath = document.getElementById("rope-path");
    const anchorTop = document.getElementById("rope-anchor-top");
    const anchorBottom = document.getElementById("rope-anchor-bottom");
    const ropeSpark = document.getElementById("rope-spark");

    if (!glider || !ropeCanvas || !ropePath) return;

    let lastScrollY = window.scrollY;
    let currentTilt = 0;

    function updateGliderAndRope() {
        const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // Shift rope to right side gutter: 72px from right viewport edge on desktop, 28px on mobile
        const rightOffset = vw < 600 ? 28 : 72;
        const anchorX = vw - rightOffset;
        const topY = 20;
        const bottomY = vh - 20;

        if (anchorTop) {
            anchorTop.setAttribute("cx", anchorX);
            anchorTop.setAttribute("cy", topY);
        }
        if (anchorBottom) {
            anchorBottom.setAttribute("cx", anchorX);
            anchorBottom.setAttribute("cy", bottomY);
        }

        const scrollY = window.scrollY;
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
        const scrollPercent = Math.min(1, Math.max(0, scrollY / maxScroll));

        // Calculate vertical glide position along viewport (from top 60px to bottomY - 150px)
        const minY = 60;
        const maxY = vh - 150;
        
        // Spring physics for rope pull bounce
        if (Math.abs(pullVelocity) > 0.1 || Math.abs(pullBounceY) > 0.1) {
            const k = 0.18; // spring stiffness
            const damping = 0.82; // damping ratio
            const force = -k * pullBounceY;
            pullVelocity = (pullVelocity + force) * damping;
            pullBounceY += pullVelocity;
        } else {
            pullBounceY = 0;
            pullVelocity = 0;
        }

        const baseTargetY = minY + scrollPercent * (maxY - minY);
        const targetY = baseTargetY + pullBounceY;

        // Calculate scroll velocity delta
        const deltaY = scrollY - lastScrollY;
        lastScrollY = scrollY;

        // Dynamic sledding tilt angle based on velocity
        const targetTilt = Math.max(-18, Math.min(18, deltaY * 1.1));
        currentTilt += (targetTilt - currentTilt) * 0.22;

        // Position glider horizontally so the pulley axle (center of 96px glider, x=48) aligns exactly with anchorX
        glider.style.left = `${(anchorX - 48).toFixed(1)}px`;

        if (!isReduced) {
            glider.style.transform = `translate3d(0, ${targetY.toFixed(1)}px, 0) rotate(${currentTilt.toFixed(1)}deg)`;
        } else {
            glider.style.transform = `translate3d(0, ${targetY.toFixed(1)}px, 0)`;
        }

        // Tux pulley groove contact Y position (at top of glider: targetY + 9.6px)
        const tuxPulleyY = targetY + 9.6;

        // Dynamic SVG Bezier curve calculation: sag under weight + sway from velocity
        const swayX = anchorX + currentTilt * 1.5;

        const pathD = `M ${anchorX} ${topY} Q ${swayX.toFixed(1)} ${tuxPulleyY.toFixed(1)} ${anchorX} ${bottomY}`;
        ropePath.setAttribute("d", pathD);

        // Friction spark brightness at pulley contact point
        if (ropeSpark) {
            ropeSpark.setAttribute("cx", anchorX.toFixed(1));
            ropeSpark.setAttribute("cy", tuxPulleyY.toFixed(1));
            const speed = Math.abs(deltaY);
            ropeSpark.style.opacity = speed > 2 ? Math.min(1, speed * 0.18).toFixed(2) : "0";
        }

        requestAnimationFrame(updateGliderAndRope);
    }

    requestAnimationFrame(updateGliderAndRope);
}

function updateFilterCounts(members) {
    const counts = {
        all: members.length,
        leadership: 0,
        engineering: 0,
        "design-events": 0
    };

    members.forEach((m) => {
        const cat = m.category || "engineering";
        if (counts[cat] !== undefined) counts[cat]++;
    });

    Object.entries(counts).forEach(([cat, count]) => {
        const el = document.getElementById(`count-${cat}`);
        if (el) el.textContent = count;
    });

    const badge = document.getElementById("roster-badge");
    if (badge) badge.textContent = `200+ ACTIVE MEMBERS`;
}

function setupFilterBar() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const targetFilter = btn.dataset.filter;

            if (expandedCard) {
                const toggle = expandedCard.querySelector(".card__toggle");
                const name = expandedCard.querySelector(".card__name")?.textContent || "";
                collapseSpotlight(expandedCard, toggle, name);
            }

            filterButtons.forEach((b) => {
                const isActive = b === btn;
                b.classList.toggle("is-active", isActive);
                b.setAttribute("aria-pressed", String(isActive));
            });

            let visibleCount = 0;
            cards.forEach((card) => {
                const category = card.dataset.category;
                const matches = targetFilter === "all" || category === targetFilter;

                card.classList.toggle("is-filtered-out", !matches);
                if (matches) {
                    card.style.setProperty("--index", visibleCount);
                    visibleCount++;
                }
            });

            observeCards();
        });
    });
}

function observeCards() {
    const cards = document.querySelectorAll(".card:not(.is-filtered-out)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
        cards.forEach((card) => card.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", loadTeam);