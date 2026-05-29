import AboutMe from "../components/About"
import Home from "../components/Home"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contacts"
import AnimatedSection from "../components/AnimatedSection"

const FullPage = () => {
	return (
		<main className="pt-[65px]">
            <section id="Home">
				<AnimatedSection>
					<Home />
				</AnimatedSection>
			</section>
            <section id="About">
				<AnimatedSection>
					<AboutMe />
				</AnimatedSection>
			</section>
            <section id="Skills">
				<AnimatedSection>
					<Skills />
				</AnimatedSection>
			</section>
            <section id="Projects">
				<AnimatedSection>
					<Projects />
				</AnimatedSection>
			</section>
            <section id="Contact">
				<AnimatedSection>
					<Contact />
				</AnimatedSection>
			</section>
        </main>
	)
}

export default FullPage ;