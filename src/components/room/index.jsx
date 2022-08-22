import { createStore } from "state-pool";
import * as uuid from "uuid";

export * from "./Window";
export const store = createStore();

store.setState("room", { id: null, currentClientId: uuid.v4(), peers: {}, routerRtpCapabilities: null });
store.setState("user", { peedID: 1, name: "Savva" });
store.setState("messages", {
    list: [
        {
            id: 1,
            authorPeedID: 2,
            text: "Lorem https://github.com/ https://git.com/ ipsum dolor sit amet, https://git.com/ scing elit. Tincidunt eu cum est potenti nullam.",
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
            text: "Lorem ipsum https://git.com/dolor sit amet, consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: [
                { id: 1, img: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg", name: "Some file", size: "25кБ" },
                { id: 2, name: "Some file", size: "25mБ" },
                { id: 3, img: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg", name: "Some file", size: "25кБ" },
            ]
        },
        {
            id: 3,
            authorPeedID: 3,
            text: "dipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 4,
            authorPeedID: 6,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 5,
            authorPeedID: 2,
            text: "Lorem ipsncidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 6,
            authorPeedID: 8,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 7,
            authorPeedID: 6,
            text: "Lorem ipsum dolor sit amet, consectetur adip elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 8,
            authorPeedID: 7,
            text: "Lorem ipsum dolor sit aectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 9,
            authorPeedID: 3,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 10,
            authorPeedID: 8,
            text: "Lorem ipsum dolor sitetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 12,
            authorPeedID: 6,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 13,
            authorPeedID: 7,
            text: "Lorem ipsum dolor sit amet, consectet consectet consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 14,
            authorPeedID: 2,
            text: "Lorem ipsum dolor sit amet, consectetur scing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 15,
            authorPeedID: 20,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 16,
            authorPeedID: 3,
            text: "dipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 17,
            authorPeedID: 6,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 18,
            authorPeedID: 2,
            text: "Lorem ipsncidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 19,
            authorPeedID: 8,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 20,
            authorPeedID: 6,
            text: "Lorem ipsum dolor sit amet, consectetur adip elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 21,
            authorPeedID: 7,
            text: "Lorem ipsum dolor sit aectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 22,
            authorPeedID: 3,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 23,
            authorPeedID: 8,
            text: "Lorem ipsum dolor sitetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 24,
            authorPeedID: 6,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
        },
        {
            id: 25,
            authorPeedID: 7,
            text: "Lorem ipsum dolor sit amet, consectet consectet consectetur adipiscing elit. Tincidunt eu cum est potenti nullam.",
            files: []
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
            {
                peedID: 10,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 11,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 12,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 13,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 14,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 15,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 16,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 17,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 18,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: false,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 19,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 20,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
            {
                peedID: 21,
                name: "Татьяна Ульянова",
                audio: Math.random() > 0.5,
                camera: Math.random() > 0.5,
                avatarUrl: "https://www.spletnik.ru/img/__post/88/88dab31928525b2b39d1c804b0d661d2_210.jpg"
            },
        ]
    })