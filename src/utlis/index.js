export const co = (p) => {
    return new Promise((resolve) => {
        p.then((result) => {
            resolve([null,result]);
        })
        .catch((err) => {
            resolve([err,null])
        });
    })
}