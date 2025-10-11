function ProjectList({projects}) {
  
  const addImg = arr => {
    return arr.map((item, i) => {
      return (
        <img key={`img_${i}`} src={item.img} alt={item.category}></img>
      )
    })
  }
  
  return (
    <div className="img-container">
      {addImg(projects)}
    </div>
  )
}

export default ProjectList