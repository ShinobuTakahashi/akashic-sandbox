export function resolveEngineFilesVariable(version: string): string {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const engineFilesPkgJson = require(`../node_modules/aev${version}/package.json`);
	return `engineFilesV${engineFilesPkgJson.version.replace(/[\.-]/g, "_")}`;
}