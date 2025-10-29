<script>
	import './app.css';
	import { onMount } from 'svelte';
	import { Sun, Moon } from 'lucide-svelte';

	let isDark = false;

	onMount(() => {
		isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
	});

	function toggleTheme() {
		if (typeof document === 'undefined') return;
		const root = document.documentElement;
		const nextDark = !root.classList.contains('dark');
		root.classList.toggle('dark', nextDark);
		try {
			localStorage.setItem('theme', nextDark ? 'dark' : 'light');
		} catch (_) {
			// no-op
		}
		isDark = nextDark;
	}
</script>

<div class="min-h-screen bg-background">
	<button
		aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		class="fixed right-4 top-4 z-50 inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white p-2 text-neutral-800 shadow-sm transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
		on:click={toggleTheme}
	>
		{#if isDark}
			<Sun size={18} />
		{:else}
			<Moon size={18} />
		{/if}
	</button>
	<slot />
</div>
