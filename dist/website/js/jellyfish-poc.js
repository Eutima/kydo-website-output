class AbstractPilot {

    calculateForce(world, render, me) {
        throw new Error('You have to implement this method!');
    }
}

class BasicPilot extends AbstractPilot {

    force;
    forceAngle = null;

    constructor(force = 0.036) {
        super();
        this.force = force;
    }

    calculateForce(world, render, me) {
        const angle = this.getForceAngle(render, me)
        let forceX = Math.cos(angle) * this.force;
        let forceY = -Math.sin(angle) * this.force;
        return {x: forceX, y: forceY};
    }

    getForceAngle(render, me) {
        if (me.position.y > render.canvas.height) {
            return Math.PI / 2
        }
        if (this.forceAngle === null) {
            const w = render.canvas.width;
            const startPoint = me.position;
            const targetPoint = {x: Math.random() * w, y: 0};
            const deltaY = -(targetPoint.y - startPoint.y);
            const deltaX = targetPoint.x - startPoint.x;

            this.forceAngle = Math.atan2(deltaY, deltaX);
        }
        return this.forceAngle;
    }

}


var Example = Example || {};

Example.chains = function () {
    const BOX_WIDTH = window.innerWidth - 40; // Set BOX_WIDTH to screen width
    const BOX_HEIGHT = window.innerHeight - 100; // Set BOX_HEIGHT to screen height
    const WORLD_BACKGROUND = 'rgba(180,210,255,0.68)'

    const DELETE_MARGIN = 300;
    const DELETE_INTERVAL = 5000;

    const BODY_RADIUS = 30;
    const TENTACLE_N = 7;
    const TENTACLE_RADIUS = 3;
    const TENTACLE_PARTS = 22;
    const TENTACLE_PARTS_NOISE = 5;
    const TENTACLE_GAP = TENTACLE_RADIUS * 2;
    const TENTACLE_SPREAD = Math.PI / 1.5;
    const TENTACLE_STIFFNESS = 0.8;

    const COLORS = [
        {color: '#1b1b3a', rarity: 5},
        {color: '#063e7b', rarity: 1},
        {color: '#6faaaa', rarity: 1},
        {color: '#e3f1f4', rarity: 1},
        {color: '#70af93', rarity: 1},
        {color: '#edd891', rarity: 2},
        {color: '#f1a868', rarity: 2},
        {color: '#fa7960', rarity: 4},
        {color: '#c84141', rarity: 3},
        {color: '#972858', rarity: 2},
        {color: '#401c6c', rarity: 1},
        {color: '#a332ff', rarity: 10}
    ];
    const HUE_SHIFT = 0.4;
    const SAT_SHIFT = 0.4;
    const LUM_SHIFT = 0.4;

    const FLUID_FRICTION = 0.05;

    const FORCE = 0.036;
    const FORCE_INTERVAL = 500;
    const FORCE_INTERVAL_NOISE = 150;

    const SPAWN_INTERVAL = 5000;
    const SPAWN_OFFSET_NOISE = 500;
    const SPAWN_POS_X = BOX_WIDTH / 2;
    const SPAWN_POS_Y = BOX_HEIGHT + 250;
    const SPAWN_POSITION_NOISE = BOX_WIDTH / 2;


    const LDL = 'ldl'
    const AZU = 'azu'
    const RMA = 'rma'
    const FKO = 'fko'
    const EMPLOYEES = [LDL, AZU, RMA, FKO];
    const EMPLOYEES_SPRITES = EMPLOYEES.map(emp => `/images/${emp}-medusa.png`);

    const EMPLOYEE_SPAWN_PROBABILITY = 0.5

    const Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Events = Matter.Events,
        Bodies = Matter.Bodies;

    const engine = Engine.create(),
        world = engine.world;

    world.gravity.y = 0;

    const render = Render.create({
        element: document.getElementById('employees-aquarium'),
        engine: engine,
        options: {
            width: BOX_WIDTH,
            height: BOX_HEIGHT,
            wireframes: false,
            background: WORLD_BACKGROUND,
            showStats: false,
            showPerformance: false,
        }
    });

    const runner = Runner.create();
    let running = false;

    function startEngine() {
        Render.run(render);
        Runner.run(runner, engine);
        running = true;
    }

    function stopEngine() {
        Render.stop(render);
        Runner.stop(runner);
        Runner.stop(engine);
        running = false;
    }

    startEngine();

    function applyNoise(baseValue, noise) {
        return baseValue + Math.random() * noise * 2 - noise;
    }

    function generateVariedColor(baseColor) {
        // Convert baseColor from hex to RGB
        let r = parseInt(baseColor.substr(1, 2), 16);
        let g = parseInt(baseColor.substr(3, 2), 16);
        let b = parseInt(baseColor.substr(5, 2), 16);

        // Calculate shifts
        const hueShift = (Math.random() - 0.5) * HUE_SHIFT;
        const satShift = (Math.random() - 0.5) * SAT_SHIFT;
        const lumShift = (Math.random() - 0.5) * LUM_SHIFT;

        // Modify RGB values
        r = Math.min(255, Math.max(0, r + r * hueShift));
        g = Math.min(255, Math.max(0, g + g * hueShift));
        b = Math.min(255, Math.max(0, b + b * hueShift));

        r = Math.min(255, Math.max(0, r + 255 * satShift));
        g = Math.min(255, Math.max(0, g + 255 * satShift));
        b = Math.min(255, Math.max(0, b + 255 * satShift));

        r = Math.min(255, Math.max(0, r + 255 * lumShift));
        g = Math.min(255, Math.max(0, g + 255 * lumShift));
        b = Math.min(255, Math.max(0, b + 255 * lumShift));

        // Convert RGB back to hex
        const variedColor = `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;

        return variedColor;
    }

    function calculateProbabilities() {
        const totalRarity = COLORS.reduce((sum, color) => sum + 1 / color.rarity, 0);
        COLORS.forEach(color => {
            color.probability = (1 / color.rarity) / totalRarity;
        });
    }

    calculateProbabilities(COLORS); // Calculate probabilities based on rarity

    function getRandomColor() {
        const random = Math.random();
        let sum = 0;
        for (let i = 0; i < COLORS.length; i++) {
            sum += COLORS[i].probability;
            if (random < sum) {
                return COLORS[i].color;
            }
        }
    }

    const group = Body.nextGroup(true);

    function generateJellyfish(posX, posY, bodyRadius, tentacleN, tentacleRadius, tentacleParts, tentaclePartsNoise, tentacleGap, tentacleSpread, tentacleStiffness, friction) {

        let isSpriteJellyfish = Math.random() < EMPLOYEE_SPAWN_PROBABILITY;
        const color = getRandomColor()
        const bodyOptions = {frictionAir: friction, render: {fillStyle: color}}
        if (isSpriteJellyfish) {
            const sprite = EMPLOYEES_SPRITES[Math.floor(Math.random() * EMPLOYEES_SPRITES.length)]
            bodyOptions['render'] = {
                sprite: {
                    texture: sprite,
                    xScale: bodyRadius / 70,
                    yScale: bodyRadius / 70,
                }
            }
        }

        const body = Bodies.circle(posX, posY, bodyRadius, bodyOptions);
        Composite.add(world, body);

        const pilot = new BasicPilot(FORCE)
        setInterval(() => {
            if (running) {
                const force = pilot.calculateForce(world, render, body)
                Body.applyForce(body, body.position, force);
            }
        }, applyNoise(FORCE_INTERVAL, FORCE_INTERVAL_NOISE));

        const tentacles = [];
        const constraints = [];

        for (let i = 0; i < tentacleN; i++) {
            const parts = applyNoise(tentacleParts, tentaclePartsNoise);
            const tentacle = Composites.stack(body.position.x, body.position.y - bodyRadius, parts, 1, -10, 1, function (x, y) {
                const options = {
                    collisionFilter: {group: group},
                    frictionAir: friction,
                    render: {fillStyle: generateVariedColor(body.render.fillStyle)}
                }
                return Bodies.circle(x, y, tentacleRadius, options);
            });

            Composites.chain(tentacle, 0, 0, 0, 0, {
                stiffness: tentacleStiffness,
                length: tentacleGap,
                render: {visible: false}
            });

            const delta = tentacleSpread / (tentacleN - 1);
            const START = tentacleSpread / 2 + Math.PI;
            const TOTAL_RADIUS = bodyRadius + tentacleRadius;
            const x = Math.cos(i * delta - START) * TOTAL_RADIUS;
            const y = Math.sin(i * delta - START) * TOTAL_RADIUS;

            const constraint = Constraint.create({
                bodyA: body,
                bodyB: tentacle.bodies[0],
                pointA: {x: x, y: y},
                length: 0
            });

            tentacles.push(tentacle);
            constraints.push(constraint);

            Composite.add(world, [tentacle, constraint]);
        }

        return {body, tentacles, constraints};
    }

    function removeJellyfish(jellyfish) {
        Composite.remove(world, jellyfish.body);
        jellyfish.tentacles.forEach(t => Composite.remove(world, t));
        jellyfish.constraints.forEach(c => Composite.remove(world, c));
    }

    function isOutsideBounds(body, margin) {
        return body.position.x < -margin ||
            body.position.x > BOX_WIDTH + margin ||
            body.position.y < -margin ||
            body.position.y > BOX_HEIGHT + margin;
    }

    const jellyfishes = [];

    function spawnJellyfish() {
        if (running) {
            setTimeout(() => {
                const jellyfish = generateJellyfish(
                    applyNoise(SPAWN_POS_X, SPAWN_POSITION_NOISE),
                    SPAWN_POS_Y,
                    BODY_RADIUS,
                    TENTACLE_N,
                    TENTACLE_RADIUS,
                    TENTACLE_PARTS,
                    TENTACLE_PARTS_NOISE,
                    TENTACLE_GAP,
                    TENTACLE_SPREAD,
                    TENTACLE_STIFFNESS,
                    FLUID_FRICTION
                );
                jellyfishes.push(jellyfish);
            }, Math.random() * SPAWN_OFFSET_NOISE);
        }
    }

    spawnJellyfish();

    setInterval(spawnJellyfish, SPAWN_INTERVAL);

    setInterval(() => {
        if (running) {
            for (let i = jellyfishes.length - 1; i >= 0; i--) {
                if (isOutsideBounds(jellyfishes[i].body, DELETE_MARGIN)) {
                    removeJellyfish(jellyfishes[i]);
                    jellyfishes.splice(i, 1);
                }
            }
        }
    }, DELETE_INTERVAL);

    const mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {visible: false}
            }
        });

    Composite.add(world, mouseConstraint);

    render.mouse = mouse;

    Render.lookAt(render, {
        min: {x: 0, y: 0},
        max: {x: BOX_WIDTH, y: BOX_HEIGHT}
    });

    const touchingMouse = () =>
        Matter.Query.point(
            engine.world.bodies,
            mouseConstraint.mouse.position
        ).length > 0;

    Matter.Events.on(engine, "beforeUpdate", () => {
        render.canvas.style.cursor = touchingMouse() ? 'pointer' : 'default';
    });

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //     if (event.target === modal) {
    //         modal.style.display = "none";
    //     }
    // }

    let employee = null;
    let lastMouseDownTime = null; // Variable to store timestamp of last mousedown event

    Events.on(mouseConstraint, 'mousedown', () => {
        const sprite = mouseConstraint?.body?.render?.sprite;
        if (sprite != null) {
            lastMouseDownTime = new Date(); // Record current timestamp on mousedown
            if (sprite?.texture?.includes(LDL)) {
                employee = LDL;
            } else if (sprite?.texture?.includes(AZU)) {
                employee = AZU;
            } else if (sprite?.texture?.includes(RMA)) {
                employee = RMA;
            } else if (sprite?.texture?.includes(FKO)) {
                employee = FKO;
            } else {
                employee = 'unknown';
            }
        }
    });

    Events.on(mouseConstraint, 'mouseup', () => {
        if (employee != null && new Date() - lastMouseDownTime < 130) {
            const modal = document.getElementById(`${employee}-modal`);
            const span = document.getElementById(`${employee}-close`);
            span.onclick = function () {
                modal.style.display = "none";
                document.body.classList.remove('modal-open');
            }

            // Reset and trigger animation for progress bars
            $(modal).find('.progress-bar').css('width', '0');
            setTimeout(() => {
                $(modal).find('.progress-bar').each(function () {
                    var value = $(this).data('value');
                    $(this).css('width', value + '%');
                });
            }, 100); // small delay to ensure the reset happens

            employee = null;
            modal.style.display = "block";
            document.body.classList.add('modal-open');
        }
    });


    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            stopEngine();
        } else {
            startEngine();
        }
    });

    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function () {
            Render.stop(render);
            Runner.stop(runner);
        }
    };
};

Example.chains.title = 'Chains';
Example.chains.for = '>=0.14.2';

if (typeof module !== 'undefined') {
    module.exports = Example.chains;
}

Example.chains();