<script lang="ts">
	import Navbar from '$lib/components/NavBar.svelte';
	import { page } from '$app/stores';

	interface CssVariables {
		[name: string]: string;
	}

	const cssVariables = (
		node: HTMLElement,
		variables: CssVariables
	): { update: (variables: CssVariables) => void } => {
		setCssVariables(node, variables);

		return {
			update(variables: CssVariables) {
				setCssVariables(node, variables);
			}
		};
	};

	const setCssVariables = (node: HTMLElement, variables: CssVariables): void => {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	};

</script>


<Navbar segment={$page.url.pathname} />

<slot />

<footer>
	<!-- <span class="svelte">Jerico Rangel</span> -->
</footer>

<style>
	* {
		box-sizing: border-box;
	}

	@font-face {
		font-family: 'Fira Code', monospace;
		font-display: optional;
		src: url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
	}

	:global(#svelte) {
		width: 100vw;
		height: 100%;
		max-width: 900px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	:global(html),
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		font-family: 'Fira Code', monospace;
		background-color: #b2d8d8;
	}

	:global(body) {
		background-color: var(--background);
		background-size: 200% 200%;
		color: black;
		margin: 0;
		box-sizing: border-box;
		display: grid;
		line-height: 1.75;
		place-items: center;
		height: 100%;
		overflow-x: hidden;
	}

	:global(h1) {
		border: 0;
	}

	:global(::selection) {
		color: black;
		background: #ca3c25;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
		border-radius: 1px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background-color: #fafffd;
		border-radius: 3px;
	}

	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
		border-radius: 1px;
	}

	footer {
		font-size: 16px;
		font-weight: 400;
		padding: 30px 0;
		max-width: 900px;
		text-align: center;
		width: 100%;
	}
</style>