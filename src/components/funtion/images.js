

const importAll = (r) => {
  const keys = r.keys()
  const img = keys.map( e => {
    return r(e)
  })

  const result = Array.from(new Set(img))
  return (
    result
  )
};

const imageFiles = importAll(require.context('/src/assets/images/mainImgs', false, /\.(png|jpe?g|svg)$/));

export default imageFiles