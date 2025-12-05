// Get the best icon URL for a website
export const getIconUrl = (url) => {
    try {
        const domain = new URL(url).hostname;
        // Using icon.horse as primary - best quality and coverage
        return `https://icon.horse/icon/${domain}`;
    } catch (e) {
        return null;
    }
};

// Get all available icon URLs for fallback
export const getAllIconUrls = (url) => {
    try {
        const domain = new URL(url).hostname;
        return [
            // Priority 1: icon.horse - High quality, good coverage, automatic fallbacks
            { source: 'iconhorse', url: `https://icon.horse/icon/${domain}`, name: 'Icon Horse' },
            // Priority 2: Clearbit - High quality logos for major companies
            { source: 'clearbit', url: `https://logo.clearbit.com/${domain}`, name: 'Clearbit' },
            // Priority 3: unavatar.io - Good alternatives from multiple sources
            { source: 'unavatar', url: `https://unavatar.io/${domain}?fallback=false`, name: 'Unavatar' },
            // Priority 4: Google Favicon - Reliable but sometimes low quality
            { source: 'google', url: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`, name: 'Google' },
            // Priority 5: DuckDuckGo - Good fallback
            { source: 'ddg', url: `https://icons.duckduckgo.com/ip3/${domain}.ico`, name: 'DuckDuckGo' },
            // Priority 6: Favicon Kit - Another reliable source  
            { source: 'faviconkit', url: `https://api.faviconkit.com/${domain}/128`, name: 'Favicon Kit' },
            // Priority 7: Direct favicon from the site
            { source: 'direct', url: `https://${domain}/favicon.ico`, name: 'Direct' }
        ];
    } catch (e) {
        return [];
    }
};

// Get icon sources object for fallback handling
export const getIconSources = (url) => {
    try {
        const domain = new URL(url).hostname;
        return {
            iconhorse: `https://icon.horse/icon/${domain}`,
            clearbit: `https://logo.clearbit.com/${domain}`,
            unavatar: `https://unavatar.io/${domain}?fallback=false`,
            google: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
            ddg: `https://icons.duckduckgo.com/ip3/${domain}.ico`,
            faviconkit: `https://api.faviconkit.com/${domain}/128`,
            direct: `https://${domain}/favicon.ico`
        };
    } catch (e) {
        return null;
    }
};
