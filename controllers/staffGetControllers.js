const showHomePage = (req, res) => {
    res.render("staff/homepage", {
        headerTitle: "Homepage",
        pageType: "staff",
    });
};

module.exports = {
    showHomePage,
};