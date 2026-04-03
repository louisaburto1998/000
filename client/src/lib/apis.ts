import type { Spotlight } from "shared";

export async function fetchHomeSpotlights() {
	const res = await fetch("/api/spotlights/home");
	if (!res.ok) {
		const body = await res.text();
		throw new Error(body || `${res.status} ${res.statusText}`);
	}
	const json: unknown = await res.json();
	return json as Spotlight[];
}

export async function fetchEarSpotlights() {
	const res = await fetch("/api/spotlights/ear");
	if (!res.ok) {
		const body = await res.text();
		throw new Error(body || `${res.status} ${res.statusText}`);
	}
	const json: unknown = await res.json();
	return json as Spotlight[];
}