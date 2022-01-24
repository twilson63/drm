watch:
	@deno run --allow-net --allow-env --allow-read --import-map import_map.json --watch --no-check=remote ./mod.tsx

test:
	@deno test --allow-net --allow-env --allow-read --import-map import_map.json 

ci:
	@deno fmt && deno lint && make test