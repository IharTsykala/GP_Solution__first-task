import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        // width: "30vw",
        // display: "grid",
        // height: "8vh",
        // margin: "0 auto",
      },
    },
  })
)

export default useStyles
