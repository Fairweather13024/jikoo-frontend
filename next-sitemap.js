let policy = {userAgent: "*"};

if(process.env.NODE_ENV !== "production"){
    policy.disallow = ['/']
};

module.exports={
    siteUrl: process.env.NEXT_PUBLIC_URL,
    generateRobotsTxt: true,
    robotsTxtOptions:{
        policies:[
            policy
        ],
        additionalSitemaps: [`${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,]
    },
    outDir:"./public",
    sitemapSize: 5000,
    priority: 1,
    // exclude: ['/instructor', '/user']
};