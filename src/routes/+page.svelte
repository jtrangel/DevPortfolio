<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

    let particlesUrl = 'http://foo.bar/particles.json'; // placeholder, replace it with a real url

    let particlesConfig = {
        particles: {
            color: {
                value: '#000'
            },
            links: {
                enable: true,
                color: '#000'
            },
            move: {
                enable: true
            },
            number: {
                value: 30
            }
        },
		interactivity: {
			events:{
				onClick: {
					enable: true,
					mode: 'push'
				},
				onHover: {
					enable: false,
					mode: 'repulse'
				}
			}
		},
		opacity: {
			value: 100,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 20,
				size_min: 0.1,
				sync: false
			}
		}
    }

    let onParticlesLoaded = (event) => {
        const particlesContainer = event.detail.particles;
    };
    void particlesInit(async (engine) => {
        await loadSlim(engine);
    });
</script>

<Particles
        id="tsparticles"
        class="put your classes here"
        style=""
        options="{particlesConfig}"
        on:particlesLoaded="{onParticlesLoaded}"
/>

<!-- or -->

<Particles
        id="tsparticles"
        class="put your classes here"
        style=""
        url="{particlesUrl}"
        on:particlesLoaded="{onParticlesLoaded}"
/>

<main>
	<h1>Nice to meet you!👋 <br /> I'm Jerico, a Physicist 📚 <br /> turned Data Engineer 💻.</h1>
    <div class="icons">
		<a
			href="https://github.com/jtrangel"
			aria-label="GitHub"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaGithub />
			</div>
		</a>
		<a
			href="https://www.linkedin.com/in/jerico-rangel/"
			aria-label="Linkedin"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaLinkedin />
			</div>
		</a>
		<!-- <a
			href="https://stackoverflow.com/users/20385032/jerico-rangel"
			aria-label="StackOverflow"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<svg class="rounded-xl" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm10.488 8.272l5.531 3.243-.686 1.162-5.532-3.243.687-1.162zm-1.456 3.113l6.185 1.739-.331 1.23-6.204-1.667.35-1.302zm-.672 2.813l6.498.65-.118 1.28-6.504-.586.124-1.344zm-.193 2.469h6.667v1.333h-6.667v-1.333zm8.833 3.333h-11v-7h1v6h9v-6h1v7zm-.852-8.704l-3.56-5.219 1.115-.76 3.559 5.219-1.114.76zm1.356-.841l-1.08-6.224 1.328-.231 1.081 6.224-1.329.231z"/></svg>
			</div>
		</a> -->
	</div>
</main>

<style>
	a {
		color: white;
		text-decoration: none;
	}
	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;

		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-weight: 700;
	}

	main > h1 {
		margin: 50px 10px 0;
		font-size: 36px;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 50px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
		color: black;
	}
	.icon:hover {
		color: #ca3c25;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}

	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}
</style>