const names = ['Adrien', 'Lionel']
const messages = ['Javascript', 'React']

function Post() {
    const choosenName = Math.random() < 0.5 ? names[0] : names[1]
    const choosenMessage = Math.random() < 0.5 ? messages[0] : messages[1]

  return (
    <div>
        <p>{choosenName}</p>
        <p>{choosenMessage} is awesome!</p>
    </div>
  )
}

export default Post