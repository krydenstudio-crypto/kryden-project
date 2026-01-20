interface MilestoneTpye {
    id: number;
    digit: number;
    text: string;
}

const Milestone = () => {

    const milestone: MilestoneTpye[] = [
        {
            id: 1,
            digit: 5,
            text: "Product Live"
        },
        {
            id: 2,
            digit: 10,
            text: "Satisfied Client"
        },
        {
            id: 3,
            digit: 7,
            text: "Years Of Experience"
        }
    ]

  return (
    <section className="section">
        <div className="flex gap-30">
            <h2 className="tracking-tighter w-[20%] text-2xl">OUR MILESTONE</h2>
            <div className="flex justify-between items-center gap-30 w-[55%]">
               {
                milestone.map(mile => {
                    const {id, digit, text} = mile;
                    return (
                        <div key={id}>
                            <div className="flex items-center pb-4">
                                <h1 className="text-textFocus font-bold text-5xl">{digit}</h1>
                                <p className="text-secondary text-4xl font-bold">+</p>
                            </div>
                            <p className="text-textFocus">{text}</p>
                        </div>
                    )
                })
               }
            </div>
        </div>
    </section>
  )
}

export default Milestone