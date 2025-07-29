import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface Award {
    event_key: string;
    name: string;
    year: number;
}

function Achievements() {
    const [awards, setAwards] = useState<Award[]>([]);

    useEffect(() => {
        document.title = 'ARC#6014 - Awards';

        const apiKey = "YqTDmbCvadu9qhHfkq4DqdgAiCVwMDBq3aHy9OZw5qPcXx3TpIVD3gkAgCbjXKVR";
        const achievementsUrl = "https://www.thebluealliance.com/api/v3/team/frc6014/awards";

        const fetchAwards = async () => {
            try {
                const response = await fetch(achievementsUrl, {
                    headers: {
                        'X-TBA-Auth-Key': apiKey
                    }
                });

                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const data: Award[] = await response.json();

                await Promise.all(
                    data.map(async (award) => {
                        try {
                            const eventResponse = await fetch(`https://www.thebluealliance.com/api/v3/event/${award.event_key}`, {
                                headers: {
                                    'X-TBA-Auth-Key': apiKey
                                }
                            });

                            if (!eventResponse.ok) {
                                throw new Error(`Response status: ${eventResponse.status}`);
                            }

                            const eventData = await eventResponse.json();
                            award.event_key = eventData.name;
                        } catch (error) {
                            console.error("Failed to convert event name:", error);
                        }
                    })
                );

                data.reverse();
                setAwards(data);
            } catch (error) {
                console.error("Failed to fetch awards:", error);
            }
        };

        fetchAwards();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-grow flex-col items-center text-center lg:mt-[9%] mt-[20%]">
                <b className="md:w-[60%] w-[80%] md:text-4xl text-xl flex justify-center">
                    Awards
                </b>

                <div className="flex flex-wrap justify-center gap-4 md:w-[80%] w-[90%] mt-[1%]">
                    {awards.map((award, index) => (
                        <div key={index} className="w-full md:w-[45%]">
                            <Accordion>
                                <AccordionSummary>
                                    <Typography>
                                        <b>{`${award.year} ${award.event_key}`}</b>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {award.name}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Achievements;
