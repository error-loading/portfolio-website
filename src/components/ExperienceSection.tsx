import { useEffect, useRef, useState } from "react";

interface Experience {
    title : string;
    company : string;
    location : string;
    description : string;
    date : string;
}

const experiences : Experience[] = [
    {
        title: "Finance Executive",
        company: "MasseyHacks",
        location: "Windsor, ON",
        description: "Budget planning and allocation for \
                      MasseyHacks. Drafted sponsorship prospectives \
                      and transparency reports. Composed and sent \
                      emails to potential sponsors.",
        date: "Sep 2023 - June 2025"
    },
    {
        title: "Co-Director",
        company: "CodeReach",
        location: "Windsor, ON",
        description: "Organizing and leading weekly coding workshops\
                      for elementary school students to teach them basics\
                      of programming in Python, Web Development, and Game Development.",
        date: "Sep 2022 - June 2025"
    },
    {
        title: "Computer Science Instructor",
        company: "Vincent Massey Computer Science Club",
        location: "Windsor, ON",
        description: "Creating lesson plans for intermediate and \
                      senior streams of the club involving data structures \
                      and advanced computer algorithms in python and C++",
        date: "Sep 2023 - June 2025"
    }
]