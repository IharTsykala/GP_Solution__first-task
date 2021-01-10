import React from "react"
import { Box, List, Typography, Button } from "@material-ui/core"
import { connect } from "react-redux"
import NewsBox from "../NewsBox/NewsBox"
// import { useId } from "react-id-generator"
import { newsInterface } from "../../Redux/InterfacesEntity/news.interface"
import { toggleModalNews } from "../../Redux/store/news/news.actions"

type NewsCatalogProps = {
  catalogNews: [newsInterface],
  dispatch: any,
}

const NewsCatalog: React.FunctionComponent<NewsCatalogProps> = ({
  catalogNews,
  dispatch,
}) => {
  const handleClickAddItem = () => {
    dispatch(toggleModalNews("Add News"))
  }
  return (
    <Box component={"div"} className={"news-catalog-container"}>
      <List className={"news-list"}>
        {catalogNews &&
          catalogNews.length &&
          catalogNews.map((item: newsInterface, index: number) => (
            <NewsBox key={index + 1} item={item} dispatch={dispatch} />
          ))}
      </List>
      <Box
        component={"div"}
        className={"news-catalog-container__tools-container"}
      >
        <Button
          // variant={(currentRequest && "contained") || "text"}
          // color="primary"
          onClick={() => handleClickAddItem()}
          className={"button button_max"}
        >
          <Typography className={"button__name"} variant="button">
            {"ADD NEWS"}
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  catalogNews: state.news.catalogNews,
})

export default connect(mapStateToProps)(NewsCatalog)
