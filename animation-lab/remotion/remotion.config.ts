import { Config } from "@remotion/cli/config";

// WSL2 workaround: Use specific port range
Config.setPort(3456);

// Disable browser auto-open in headless environments
Config.setChromiumDisableWebSecurity(true);
