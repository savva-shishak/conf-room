import { createStore } from "state-pool";
import * as uuid from "uuid";

import { LoremIpsum } from "lorem-ipsum";

export const store = createStore();

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

store.setState("room", { id: null, currentClientId: uuid.v4(), peers: {}, routerRtpCapabilities: null });
store.setState("user", { peedID: 1 });
store.setState("messages", {
    list: [
        {
            id: 1,
            authorPeedID: 2,
            text: lorem.generateWords(Math.random() * 100 >> 0),
            files: [
                { id: 1, img: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg", name: "Some file", size: "25кБ" }
            ],
            images: [
                "https://kipmu.ru/wp-content/uploads/tlnn.jpg",
                "https://i.artfile.ru/1920x1080_1022440_[www.ArtFile.ru].jpg",
            ]
        },
        {
            id: 2,
            authorPeedID: 1,
            text: lorem.generateWords(Math.random() * 100 >> 0),
            files: [
                { id: 1, img: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg", name: "Some file", size: "25кБ" },
                { id: 2, name: "Some file", size: "25mБ" },
                { id: 3, img: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg", name: "Some file", size: "25кБ" },
            ]
        },
    ],
})
store.setState(
    "participants",
    {
        list: [
            {
                peedID: 1,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 2,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 3,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 4,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 5,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 6,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 7,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 8,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 9,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
        ]
    }
);

export * from "./Window";