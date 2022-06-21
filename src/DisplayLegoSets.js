const displayLegoSets = (props) => {

    return (
        <section> 
            {
            props.legoSets.length === 0
                ? (<h2>Sorry no lego sets could be found</h2>)
                : (
                    <div className="photos">
                            <h2>Lego Sets Found</h2>
                        {
                            props.legoSets.map((legoSet) => {
                                console.log(legoSet);
                                return (
                                    <>
                                        <div className="photo-container" key={legoSet.set_num}>
                                            <img src={legoSet.set_img_url} alt={legoSet.name} />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                )
            }
        </section>
    )
}

export default displayLegoSets;