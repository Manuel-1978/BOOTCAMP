



export default function List(props) {
    const Shop= [Shop];
    
    return (
        <div>
          <ol>
              {
                  Shop.map(Shop => <li key={Shop.props}>{Shop}</li>)
              }
              </ol>  

        </div>
    )
}
