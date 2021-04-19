import React from 'react';
import PainterTeam from '../PainterTeam/PainterTeam';

const Painter = () => {
    const painterData = [
        {
            painterImg: 'https://i.ibb.co/gz3JhrY/worker1.jpg',
            name: "Ruhana Parbina",
            position: "Worker"
        },
        {
            painterImg: 'https://i.ibb.co/ZXbBSqg/worker2.jpg',
            name: "Johan Sing",
            position: "Worker"
        },
        {
            painterImg: 'https://i.ibb.co/ggsCsLx/worker4.jpg',
            name: "Krisna Malik",
            position: "Worker"
        },
        {
            painterImg: 'https://i.ibb.co/DCpPVq2/worker3.jpg',
            name: "Chris Gayle",
            position: "Worker"
        },
        {
            painterImg: 'https://i.ibb.co/gdbhj94/worker5.jpg',
            name: "Sharmina Hasmin",
            position: "Worker"
        },
        {
            painterImg: 'https://i.ibb.co/Zf7wYtS/Studio-shot-of-young-beautiful-woman-wearing-wite-casual-shirt-with-red-stripes-and-brown-apron-on-y.jpg',
            name: "Ketrina kaif",
            position: "Worker"
        }
    ]

    return (
        <section className="painter">
            <div className="container">
                <div className="text-center mb-3 py-4">
                    <h1>OUR <span className="font-color">GREATE</span> TEAM</h1>
                </div>
                <div className="d-flex row">
                    {
                        painterData.map(painter => <PainterTeam painter={painter}></PainterTeam>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Painter;