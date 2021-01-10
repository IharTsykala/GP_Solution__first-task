import React, { useEffect, useState } from "react"
import { Box, Toolbar, InputBase } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import { connect } from "react-redux"
import {
  getNews,
  setCurrentFilterNews,
  setEmptyFilterNews,
} from "../../Redux/store/news/news.actions"

type NewsFilterProps = {
  dispatch: any,
}

const NewsFilter: React.FunctionComponent<NewsFilterProps> = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getNews(new Date("2020-12-01")))
  }, [dispatch])

  const [stateValue, setStateValue] = useState("")
  const handlerInputFilter = (e: any) => {
    setStateValue(e.target.value)
    if (e.target.value.length > 1)
      dispatch(setCurrentFilterNews(e.target.value))
    else dispatch(setEmptyFilterNews())
  }

  return (
    <Box component={"div"} className={"news-filter-container"}>
      <Toolbar>
        <SearchIcon />
        <InputBase
          value={stateValue}
          placeholder={"it is filter"}
          onInput={(e) => handlerInputFilter(e)}
        />
      </Toolbar>
    </Box>
  )
}

const mapStateToProps = (state: any) => ({})

export default connect(mapStateToProps)(NewsFilter)
