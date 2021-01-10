import React, { useEffect, useState } from "react"
import {
  Box,
  FormControlLabel,
  Checkbox,
  Toolbar,
  InputBase,
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
// import { getCatalogByDay } from "../../Redux/store/Photo/Photo.actions"
import { connect } from "react-redux"
import {
  getNews,
  setCurrentFilterNews,
  setEmptyFilterNews,
} from "../../Redux/store/news/news.actions"

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
        <SearchIcon
        // className={"header__request__container__search_icon"}
        // onClick={() => handlerDispatchRequest()}
        />
        <InputBase
          value={stateValue}
          // placeholder={
          //   (!currentRequestId &&
          //     ((locale === "En" && "Chose request") || "Выберите запрос")) ||
          //   (locale === "En" && "Input data") ||
          //   "Введите данные"
          // }
          // className={`header__request__container__input ${
          //   (fontSize && "big_font_size") || "normal_font_size"
          // }`}
          // disabled={(!currentRequestId && true) || false}
          onInput={(e) => handlerInputFilter(e)}
          // onKeyPress={(e) => handlerDispatchRequest(e)}
        />
      </Toolbar>
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  //   currentDate: state.data.data,
  //   catalogValue: state.catalog.catalogValue,
})

export default connect(mapStateToProps)(NewsFilter)
