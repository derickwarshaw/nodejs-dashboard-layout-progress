module.exports = [
  [
    {
      position: {
        grow: 3
      },
      views: [
        {
          type: "log",
          title: "stdout",
          borderColor: "green",
          exclude: "^\\[STATUS\\]",
          streams: ["stdout"]
        },
        {
          type: "log",
          title: "stderr",
          borderColor: "red",
          exclude: "^\\[STATUS\\]",
          streams: ["stderr"]
        },
        {
          type: "log",
          title: "status",
          borderColor: "light-blue",
          fgColor: "",
          bgColor: "",
          streams: ["stdout", "stderr"],
          include: "^\\[STATUS\\](.*)",
          position: {
            size: 3
          }
        }
      ]
    },
    {
      views: [
        {
          type: "cpu",
          title: "cpu utilization",
          limit: 30
        },
        {
          type: "eventLoop",
          title: "EL delay",
          limit: 30
        },
        {
          type: "memory",
          title: "memory",
          position: {
            size: 15
          }
        }
      ]
    }
  ]
];
