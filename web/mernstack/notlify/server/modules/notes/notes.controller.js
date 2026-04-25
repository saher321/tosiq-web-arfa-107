
export const list = async (req, res) => {
  try {
    const notes = ["Note 1", "Note 2", "Other notes"]
    return res.send({
      status: true,
      notes
    })
  } catch (error) {
    console.log("ERR:", error)
  }
}