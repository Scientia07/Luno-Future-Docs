"""
==============================================================================
FILE METADATA
==============================================================================
filename:       math_equations.py
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
description:    Manim scenes for mathematical equation animations (3b1b style)
==============================================================================

Usage:
    manim -pql math_equations.py EquationScene      # Low quality preview
    manim -pqh math_equations.py EquationScene      # High quality preview
    manim -qk math_equations.py EquationScene       # 4K render
    manim -qh --format=gif math_equations.py EquationScene  # Export as GIF
"""

from manim import *


class EquationScene(Scene):
    """Animated equation derivation - Euler's Identity."""

    def construct(self):
        # Title
        title = Text("Euler's Identity", font_size=48)
        title.to_edge(UP)
        self.play(Write(title))
        self.wait(0.5)

        # Build up to Euler's Identity
        exp_form = MathTex(r"e^{i\theta} = \cos(\theta) + i\sin(\theta)")
        exp_form.scale(1.2)

        self.play(Write(exp_form))
        self.wait(1)

        # Substitute theta = pi
        sub_text = Text("Let θ = π", font_size=36, color=YELLOW)
        sub_text.next_to(exp_form, DOWN, buff=0.8)
        self.play(FadeIn(sub_text))
        self.wait(0.5)

        # Transform to substituted form
        substituted = MathTex(r"e^{i\pi} = \cos(\pi) + i\sin(\pi)")
        substituted.scale(1.2)

        self.play(
            TransformMatchingTex(exp_form, substituted),
            FadeOut(sub_text)
        )
        self.wait(1)

        # Evaluate cos and sin
        evaluated = MathTex(r"e^{i\pi} = -1 + i(0)")
        evaluated.scale(1.2)

        self.play(TransformMatchingTex(substituted, evaluated))
        self.wait(0.5)

        # Simplify
        simplified = MathTex(r"e^{i\pi} = -1")
        simplified.scale(1.2)

        self.play(TransformMatchingTex(evaluated, simplified))
        self.wait(0.5)

        # Final form - Euler's Identity
        euler = MathTex(r"e^{i\pi} + 1 = 0")
        euler.scale(1.5)
        euler.set_color(BLUE)

        box = SurroundingRectangle(euler, color=GOLD, buff=0.3)

        self.play(
            TransformMatchingTex(simplified, euler),
            Create(box)
        )
        self.wait(0.5)

        # Highlight the 5 fundamental constants
        constants = VGroup(
            MathTex("e", color=RED),
            MathTex("i", color=GREEN),
            MathTex(r"\pi", color=BLUE),
            MathTex("1", color=ORANGE),
            MathTex("0", color=PURPLE)
        )
        constants.arrange(RIGHT, buff=0.8)
        constants.to_edge(DOWN, buff=1)

        labels = Text("Five fundamental constants", font_size=28, color=GRAY)
        labels.next_to(constants, DOWN, buff=0.3)

        self.play(
            *[FadeIn(c, shift=UP) for c in constants],
            FadeIn(labels)
        )
        self.wait(2)


class QuadraticFormula(Scene):
    """Animated derivation of the quadratic formula."""

    def construct(self):
        # Title
        title = Text("Deriving the Quadratic Formula", font_size=42)
        title.to_edge(UP)
        self.play(Write(title))

        # Starting equation
        eq1 = MathTex(r"ax^2 + bx + c = 0")
        self.play(Write(eq1))
        self.wait(0.5)

        # Step 1: Divide by a
        eq2 = MathTex(r"x^2 + \frac{b}{a}x + \frac{c}{a} = 0")
        step1 = Text("Divide by a", font_size=24, color=YELLOW)
        step1.to_edge(LEFT).shift(UP)

        self.play(FadeIn(step1))
        self.play(TransformMatchingTex(eq1, eq2))
        self.wait(0.5)

        # Step 2: Move constant
        eq3 = MathTex(r"x^2 + \frac{b}{a}x = -\frac{c}{a}")
        step2 = Text("Isolate x terms", font_size=24, color=YELLOW)
        step2.next_to(step1, DOWN, aligned_edge=LEFT)

        self.play(FadeIn(step2))
        self.play(TransformMatchingTex(eq2, eq3))
        self.wait(0.5)

        # Step 3: Complete the square
        eq4 = MathTex(
            r"x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} = \frac{b^2}{4a^2} - \frac{c}{a}"
        )
        eq4.scale(0.9)
        step3 = Text("Complete the square", font_size=24, color=YELLOW)
        step3.next_to(step2, DOWN, aligned_edge=LEFT)

        self.play(FadeIn(step3))
        self.play(TransformMatchingTex(eq3, eq4))
        self.wait(0.5)

        # Step 4: Factor left side
        eq5 = MathTex(
            r"\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}"
        )
        step4 = Text("Factor", font_size=24, color=YELLOW)
        step4.next_to(step3, DOWN, aligned_edge=LEFT)

        self.play(FadeIn(step4))
        self.play(TransformMatchingTex(eq4, eq5))
        self.wait(0.5)

        # Step 5: Take square root
        eq6 = MathTex(
            r"x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}"
        )
        step5 = Text("Square root", font_size=24, color=YELLOW)
        step5.next_to(step4, DOWN, aligned_edge=LEFT)

        self.play(FadeIn(step5))
        self.play(TransformMatchingTex(eq5, eq6))
        self.wait(0.5)

        # Final: Quadratic formula
        final = MathTex(
            r"x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}"
        )
        final.scale(1.3)
        final.set_color(GOLD)

        box = SurroundingRectangle(final, color=BLUE, buff=0.2)

        # Clear steps and show final
        self.play(
            FadeOut(step1), FadeOut(step2), FadeOut(step3),
            FadeOut(step4), FadeOut(step5),
            TransformMatchingTex(eq6, final)
        )
        self.play(Create(box))
        self.wait(2)


class FourierSeries(Scene):
    """Visualize Fourier series approximation of a square wave."""

    def construct(self):
        # Title
        title = Text("Fourier Series: Square Wave", font_size=40)
        title.to_edge(UP)
        self.play(Write(title))

        # Axes
        axes = Axes(
            x_range=[-PI, PI, PI/2],
            y_range=[-1.5, 1.5, 0.5],
            x_length=10,
            y_length=4,
            axis_config={"include_tip": True}
        )
        axes.shift(DOWN * 0.5)

        self.play(Create(axes))

        # Square wave (target)
        def square_wave(x):
            return 1 if x > 0 else (-1 if x < 0 else 0)

        square = axes.plot(
            square_wave,
            x_range=[-PI + 0.01, PI - 0.01],
            discontinuities=[0],
            color=GRAY,
            stroke_width=2
        )
        square_label = Text("Target", font_size=24, color=GRAY)
        square_label.next_to(axes, RIGHT).shift(UP)

        self.play(Create(square), FadeIn(square_label))

        # Fourier approximation formula
        formula = MathTex(
            r"f(x) \approx \frac{4}{\pi}\sum_{n=1,3,5...}^{N}\frac{\sin(nx)}{n}"
        )
        formula.scale(0.7)
        formula.to_edge(DOWN)
        self.play(Write(formula))

        # Animate adding terms
        def fourier_approx(n_terms):
            def func(x):
                result = 0
                for k in range(n_terms):
                    n = 2 * k + 1  # Odd numbers: 1, 3, 5, ...
                    result += np.sin(n * x) / n
                return (4 / PI) * result
            return func

        colors = [RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE]
        current_plot = None
        n_label = None

        for i, n in enumerate([1, 2, 3, 5, 10, 25]):
            new_plot = axes.plot(
                fourier_approx(n),
                x_range=[-PI, PI],
                color=colors[i % len(colors)],
                stroke_width=3
            )

            new_label = MathTex(f"N = {n}", color=colors[i % len(colors)])
            new_label.next_to(axes, RIGHT).shift(DOWN * 0.5)

            if current_plot is None:
                self.play(Create(new_plot), FadeIn(new_label))
            else:
                self.play(
                    Transform(current_plot, new_plot),
                    Transform(n_label, new_label)
                )

            current_plot = new_plot if current_plot is None else current_plot
            n_label = new_label if n_label is None else n_label
            self.wait(0.8)

        self.wait(1)


class ComplexPlane(Scene):
    """Visualize complex number operations on the complex plane."""

    def construct(self):
        # Title
        title = Text("Complex Numbers", font_size=40)
        title.to_edge(UP)
        self.play(Write(title))

        # Complex plane
        plane = ComplexPlane(
            x_range=[-4, 4],
            y_range=[-3, 3],
            x_length=8,
            y_length=6
        ).add_coordinates()

        self.play(Create(plane))

        # Plot a complex number
        z = complex(2, 1)
        dot = Dot(plane.n2p(z), color=YELLOW)
        label = MathTex("z = 2 + i", color=YELLOW)
        label.next_to(dot, UR, buff=0.2)

        # Vector from origin
        vector = Arrow(
            plane.n2p(0), plane.n2p(z),
            buff=0,
            color=YELLOW
        )

        self.play(
            GrowArrow(vector),
            FadeIn(dot),
            Write(label)
        )
        self.wait(0.5)

        # Show modulus
        modulus = MathTex(r"|z| = \sqrt{5}", color=GREEN)
        modulus.to_edge(LEFT).shift(UP)

        arc = Arc(
            radius=0.5,
            start_angle=0,
            angle=np.arctan2(1, 2),
            color=GREEN
        ).shift(plane.n2p(0))

        self.play(Write(modulus), Create(arc))
        self.wait(0.5)

        # Multiply by i (rotate 90°)
        rotate_label = MathTex(r"z \cdot i = -1 + 2i", color=RED)
        rotate_label.next_to(modulus, DOWN, aligned_edge=LEFT, buff=0.5)

        z_rotated = z * 1j
        new_vector = Arrow(
            plane.n2p(0), plane.n2p(z_rotated),
            buff=0,
            color=RED
        )
        new_dot = Dot(plane.n2p(z_rotated), color=RED)

        self.play(
            Write(rotate_label),
            Transform(vector.copy(), new_vector),
            FadeIn(new_dot)
        )
        self.wait(1)

        # Show rotation explanation
        explanation = Text(
            "Multiplying by i rotates 90° counterclockwise",
            font_size=24,
            color=GRAY
        )
        explanation.to_edge(DOWN)
        self.play(FadeIn(explanation))
        self.wait(2)
