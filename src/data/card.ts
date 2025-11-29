export interface CardProps {
    title: string;
    subtitle?: string;
    description: string;
    className?: string;
    delay?: number;
}

export const dataCardProps: CardProps[] = [
    // row 1
    {
        title: "Background",
        subtitle: "My Journey",
        description: "Started my journey in computer science in high school and \
                        have been passionate about it ever since.",
        delay: 100
    },
    {
        title: "Education",
        subtitle: "Mathematics",
        description: "Studying Mathematics at the University of Waterloo.",
        delay: 200
    },
    {
        title: "Interests",
        subtitle: "Beyond Coding",
        description: "Enjoy hiking, photography, and exploring new technologies.",
        className: 'about-card-row-span-2',
        delay: 300
    },
    // row 2
    {
        title: "Soccer",
        subtitle: "Visca el Barca",
        description: "Avid FC Barcelona fan, following their matches and history closely.",
        className: "about-card-col-span-2",
        delay: 400
    },
    // row 3
    {
        title: "Sikhi",
        subtitle: "Way of Life",
        description: "Learning to be a better person through the teachings of Sikhi.",
        delay: 500
    },
    {
        title: "Travel",
        subtitle: "World Explorer",
        description: "Love to travel and experience different cultures and cuisines.",
        delay: 600
    },
    {
        title: "Philosophy",
        subtitle: "Learning and Growth",
        description: "Constantly seeking knowledge and understanding of the world.",
        delay: 700
    }
]