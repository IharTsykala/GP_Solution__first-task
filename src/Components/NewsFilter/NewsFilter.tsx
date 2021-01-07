import React, { useEffect } from "react"
import { Box, FormControlLabel, Checkbox } from "@material-ui/core"
// import { getCatalogByDay } from "../../Redux/store/Photo/Photo.actions"
import { connect } from "react-redux"
import { getNews } from "../../Redux/store/news/news.actions"

type NewsFilterProps = {
  //   currentDate: Date,
  //   catalogValue: boolean,
  dispatch: any,
}

const NewsFilter: React.FunctionComponent<NewsFilterProps> = ({
  //   currentDate,
  //   catalogValue,
  dispatch,
}) => {
  useEffect(() => {
    dispatch(getNews(new Date()))
  }, [dispatch])

  return (
    <Box component={"div"} className={"catalog"}>
      {/* <FormControlLabel
        control={
          <Checkbox
            checked={catalogValue}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Tape"
      /> */}
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  //   currentDate: state.data.data,
  //   catalogValue: state.catalog.catalogValue,
})

export default connect(mapStateToProps)(NewsFilter)
