
export const list = async (req, res) => {
  try {
    const notes = [
  {
    id: 1,
    title: "Shopping List",
    content: "Buy milk, eggs, and bread",
    date: "2026-04-25"
  },
  {
    id: 2,
    title: "Meeting Notes",
    content: "Discuss project timeline",
    date: "2026-04-24"
  },
  {
    id: 3,
    title: "Workout Plan",
    content: "Chest and triceps workout",
    date: "2026-04-23"
  },
  {
    id: 4,
    title: "Study Notes",
    content: "Revise JavaScript arrays and objects",
    date: "2026-04-22"
  },
  {
    id: 5,
    title: "Travel Plan",
    content: "Plan weekend trip itinerary",
    date: "2026-04-21"
  }
];
    return res.send({
      status: true,
      notes
    })
  } catch (error) {
    console.log("ERR:", error)
  }
}