"""
==============================================================================
FILE METADATA
==============================================================================
filename:       physics_sim.py
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
description:    Manim scenes for physics simulations and visualizations
==============================================================================

Usage:
    manim -pql physics_sim.py PendulumScene       # Preview
    manim -qh physics_sim.py PendulumScene        # High quality
    manim -qk physics_sim.py WaveInterference     # 4K render
"""

from manim import *
import numpy as np


class PendulumScene(Scene):
    """Simple pendulum physics simulation."""

    def construct(self):
        # Title
        title = Text("Simple Pendulum", font_size=44)
        title.to_edge(UP)
        self.play(Write(title))

        # Pendulum parameters
        pivot = UP * 2
        length = 3
        g = 9.8
        theta_max = PI / 6  # 30 degrees

        # Create pendulum components
        pivot_dot = Dot(pivot, color=WHITE, radius=0.1)

        # Time tracker
        time_tracker = ValueTracker(0)

        def get_theta(t):
            # Simple harmonic approximation
            omega = np.sqrt(g / length)
            return theta_max * np.cos(omega * t)

        def get_bob_position():
            t = time_tracker.get_value()
            theta = get_theta(t)
            x = pivot[0] + length * np.sin(theta)
            y = pivot[1] - length * np.cos(theta)
            return np.array([x, y, 0])

        # Pendulum rod
        rod = always_redraw(lambda: Line(
            pivot, get_bob_position(),
            color=GRAY, stroke_width=4
        ))

        # Bob
        bob = always_redraw(lambda: Dot(
            get_bob_position(),
            color=BLUE, radius=0.2
        ))

        # Trail
        trail = TracedPath(
            bob.get_center,
            stroke_color=BLUE,
            stroke_width=2,
            stroke_opacity=0.5
        )

        # Display formulas
        period_formula = MathTex(r"T = 2\pi\sqrt{\frac{L}{g}}")
        period_formula.to_corner(DL)

        omega_formula = MathTex(r"\omega = \sqrt{\frac{g}{L}}")
        omega_formula.next_to(period_formula, UP, aligned_edge=LEFT)

        self.play(
            FadeIn(pivot_dot),
            Create(rod),
            FadeIn(bob),
            Write(period_formula),
            Write(omega_formula)
        )

        # Add trail and animate
        self.add(trail)

        # Animate pendulum for 3 periods
        omega = np.sqrt(g / length)
        period = 2 * PI / omega
        self.play(
            time_tracker.animate.set_value(3 * period),
            run_time=6,
            rate_func=linear
        )

        self.wait(1)


class WaveInterference(Scene):
    """Visualize wave interference patterns."""

    def construct(self):
        # Title
        title = Text("Wave Interference", font_size=44)
        title.to_edge(UP)
        self.play(Write(title))

        # Parameters
        amplitude = 1
        wavelength = 2
        k = 2 * PI / wavelength

        # Time tracker
        time = ValueTracker(0)
        omega = 2  # Angular frequency

        # Axes for individual waves
        axes1 = Axes(
            x_range=[0, 8, 1],
            y_range=[-1.5, 1.5, 0.5],
            x_length=5,
            y_length=2,
            axis_config={"include_tip": False}
        )
        axes1.to_edge(LEFT).shift(UP * 1.5)

        axes2 = Axes(
            x_range=[0, 8, 1],
            y_range=[-1.5, 1.5, 0.5],
            x_length=5,
            y_length=2,
            axis_config={"include_tip": False}
        )
        axes2.to_edge(LEFT).shift(DOWN * 0.5)

        # Axes for superposition
        axes3 = Axes(
            x_range=[0, 8, 1],
            y_range=[-2.5, 2.5, 1],
            x_length=5,
            y_length=3,
            axis_config={"include_tip": False}
        )
        axes3.to_edge(RIGHT).shift(DOWN * 0.3)

        # Labels
        label1 = Text("Wave 1", font_size=20, color=BLUE)
        label1.next_to(axes1, UP)

        label2 = Text("Wave 2", font_size=20, color=RED)
        label2.next_to(axes2, UP)

        label3 = Text("Superposition", font_size=20, color=GREEN)
        label3.next_to(axes3, UP)

        # Wave functions
        def wave1_func(x):
            t = time.get_value()
            return amplitude * np.sin(k * x - omega * t)

        def wave2_func(x):
            t = time.get_value()
            phase_shift = PI / 2  # 90 degree phase difference
            return amplitude * np.sin(k * x - omega * t + phase_shift)

        def superposition_func(x):
            return wave1_func(x) + wave2_func(x)

        # Animated waves
        wave1 = always_redraw(lambda: axes1.plot(
            wave1_func, x_range=[0, 8], color=BLUE
        ))

        wave2 = always_redraw(lambda: axes2.plot(
            wave2_func, x_range=[0, 8], color=RED
        ))

        superposition = always_redraw(lambda: axes3.plot(
            superposition_func, x_range=[0, 8], color=GREEN, stroke_width=3
        ))

        # Draw axes and waves
        self.play(
            Create(axes1), Create(axes2), Create(axes3),
            FadeIn(label1), FadeIn(label2), FadeIn(label3)
        )

        self.play(
            Create(wave1), Create(wave2), Create(superposition)
        )

        # Formula
        formula = MathTex(
            r"y_1 + y_2 = A\sin(kx - \omega t) + A\sin(kx - \omega t + \phi)"
        )
        formula.scale(0.6)
        formula.to_edge(DOWN)
        self.play(Write(formula))

        # Animate waves
        self.play(
            time.animate.set_value(4 * PI),
            run_time=6,
            rate_func=linear
        )

        self.wait(1)


class VectorField(Scene):
    """Visualize a 2D vector field (electric field)."""

    def construct(self):
        # Title
        title = Text("Electric Field: Two Charges", font_size=40)
        title.to_edge(UP)
        self.play(Write(title))

        # Charge positions
        pos_charge_pos = LEFT * 2
        neg_charge_pos = RIGHT * 2

        # Charges
        pos_charge = Dot(pos_charge_pos, color=RED, radius=0.2)
        pos_label = MathTex("+", color=WHITE).move_to(pos_charge_pos)

        neg_charge = Dot(neg_charge_pos, color=BLUE, radius=0.2)
        neg_label = MathTex("-", color=WHITE).move_to(neg_charge_pos)

        self.play(
            FadeIn(pos_charge), FadeIn(pos_label),
            FadeIn(neg_charge), FadeIn(neg_label)
        )

        # Vector field function
        def electric_field(point):
            # Simplified 2D electric field from two charges
            x, y, _ = point

            # Vector from positive charge
            r1 = np.array([x - pos_charge_pos[0], y - pos_charge_pos[1], 0])
            r1_mag = np.linalg.norm(r1) + 0.1  # Avoid division by zero
            e1 = r1 / (r1_mag ** 2)

            # Vector from negative charge (opposite direction)
            r2 = np.array([x - neg_charge_pos[0], y - neg_charge_pos[1], 0])
            r2_mag = np.linalg.norm(r2) + 0.1
            e2 = -r2 / (r2_mag ** 2)

            total = e1 + e2

            # Normalize and scale for visualization
            magnitude = np.linalg.norm(total)
            if magnitude > 0.01:
                return total / magnitude * 0.3
            return np.array([0, 0, 0])

        # Create vector field
        vector_field = ArrowVectorField(
            electric_field,
            x_range=[-5, 5, 0.7],
            y_range=[-3, 3, 0.7],
            colors=[BLUE, TEAL, GREEN, YELLOW, ORANGE, RED]
        )

        self.play(Create(vector_field), run_time=2)
        self.wait(1)

        # Add field lines
        field_lines = StreamLines(
            electric_field,
            x_range=[-5, 5],
            y_range=[-3, 3],
            stroke_width=1,
            max_anchors_per_line=30
        )

        self.play(FadeOut(vector_field))
        self.play(Create(field_lines), run_time=3)

        # Explanation
        explanation = Text(
            "Field lines: + to - charge",
            font_size=24,
            color=GRAY
        )
        explanation.to_edge(DOWN)
        self.play(FadeIn(explanation))

        self.wait(2)


class ProjectileMotion(Scene):
    """Animate projectile motion with equations."""

    def construct(self):
        # Title
        title = Text("Projectile Motion", font_size=44)
        title.to_edge(UP)
        self.play(Write(title))

        # Parameters
        v0 = 10  # Initial velocity
        angle = PI / 4  # 45 degrees
        g = 9.8

        v0x = v0 * np.cos(angle)
        v0y = v0 * np.sin(angle)

        # Time of flight
        t_flight = 2 * v0y / g

        # Axes
        axes = Axes(
            x_range=[0, 12, 2],
            y_range=[0, 4, 1],
            x_length=10,
            y_length=4,
            axis_config={"include_tip": True, "include_numbers": True}
        )
        axes.shift(DOWN * 1.5 + LEFT * 0.5)

        x_label = axes.get_x_axis_label("x (m)")
        y_label = axes.get_y_axis_label("y (m)")

        self.play(Create(axes), Write(x_label), Write(y_label))

        # Trajectory function
        def trajectory(t):
            x = v0x * t
            y = v0y * t - 0.5 * g * t ** 2
            return axes.c2p(x, max(0, y))

        # Draw trajectory path
        path = ParametricFunction(
            lambda t: axes.c2p(v0x * t, v0y * t - 0.5 * g * t ** 2),
            t_range=[0, t_flight],
            color=YELLOW
        )

        self.play(Create(path))

        # Animated projectile
        time = ValueTracker(0)

        projectile = always_redraw(lambda: Dot(
            trajectory(time.get_value()),
            color=RED, radius=0.15
        ))

        # Velocity vector
        def get_velocity_vector():
            t = time.get_value()
            pos = trajectory(t)
            vx = v0x
            vy = v0y - g * t

            # Scale for visualization
            scale = 0.1
            end = pos + np.array([vx * scale, vy * scale, 0])

            return Arrow(pos, end, color=GREEN, buff=0)

        velocity = always_redraw(get_velocity_vector)

        self.play(FadeIn(projectile), GrowArrow(velocity))

        # Equations
        equations = VGroup(
            MathTex(r"x(t) = v_0 \cos(\theta) \cdot t"),
            MathTex(r"y(t) = v_0 \sin(\theta) \cdot t - \frac{1}{2}gt^2"),
        )
        equations.arrange(DOWN, aligned_edge=LEFT)
        equations.scale(0.7)
        equations.to_corner(UR)

        self.play(Write(equations))

        # Animate projectile
        self.play(
            time.animate.set_value(t_flight),
            run_time=3,
            rate_func=linear
        )

        # Show max height
        max_height = (v0y ** 2) / (2 * g)
        max_height_line = DashedLine(
            axes.c2p(0, max_height),
            axes.c2p(v0x * t_flight / 2, max_height),
            color=BLUE
        )
        max_label = MathTex(f"h_{{max}} = {max_height:.1f}m", color=BLUE)
        max_label.scale(0.7)
        max_label.next_to(max_height_line, UP)

        self.play(Create(max_height_line), Write(max_label))

        # Show range
        range_val = v0x * t_flight
        range_label = MathTex(f"R = {range_val:.1f}m", color=ORANGE)
        range_label.scale(0.7)
        range_label.next_to(axes.c2p(range_val / 2, 0), DOWN)

        self.play(Write(range_label))

        self.wait(2)
