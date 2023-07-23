import { GlobalSettings } from "./environmentsettings";

const appEnv = process.env.ENV || "development";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api',
            companyname: "Premium Solar Energy",
            siteName: GlobalSettings[appEnv].siteName,
            telephone: GlobalSettings[appEnv].telephone,
            siteEnvironment: GlobalSettings[appEnv].siteEnvironment,
        }
      },
    modules: ['@pinia/nuxt',],
    plugins: ["~/stores/app.ts"],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
