
export const getColors = async (req, res) => {

    const colors = [
        {id: 982, code: "#33d"},
        {id: 4392, code: "#41d"},
        {id: 10323, code: "#63d"},
    ]

    return res.send({
        status: true,
        houseColors: colors
    })
}