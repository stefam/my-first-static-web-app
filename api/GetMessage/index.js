module.exports = async function (context, req) {
    context.res = {
        body: { text: "Message from the API"}
    };
};