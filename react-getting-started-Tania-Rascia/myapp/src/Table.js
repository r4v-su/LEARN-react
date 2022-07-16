const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
  <td>{row.name}</td>
  <td>{row.job}</td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
</tr>
    )
  })
    return <tbody>{rows}</tbody>
  }

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

const Table = (props) => {
  const {characterData, removeCharacter} = props

          return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
          
        )
    }

export default Table
