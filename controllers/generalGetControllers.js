const showHomePage = (req, res) => {
    res.render("general/homepage", {
        headerTitle: "Homepage",
        pageType: "general",
    });
};

module.exports = {
    showHomePage,
};
