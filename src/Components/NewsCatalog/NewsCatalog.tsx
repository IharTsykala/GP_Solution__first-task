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
    dispatch(toggleModalNews())
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
      <Button
        // variant={(currentRequest && "contained") || "text"}
        // color="primary"
        onClick={() => dispatch(handleClickAddItem())}
        // className={(fontSize && "big_font_size") || "normal_font_size"}
      >
        <Typography variant="button">{"ADD NEWS"}</Typography>
      </Button>
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  catalogNews: state.news.catalogNews,
})

export default connect(mapStateToProps)(NewsCatalog)
