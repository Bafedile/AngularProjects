import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredrient.model";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('Big Fat Burger', 'This is simply a test', 'data:image/jpeg;base64,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',[
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Cheese What What', 'This book includes recipes for any occasion', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQYGBYZGh0dGhoZGh0aIhwfHxwZHBsiHRwaHysiGxwpHRwZIzQkKCwuMTExHCQ3PDcwOyswMS4BCwsLDw4PHRERHTApIig2MDYwMS4yMDk7NzcuMzAzMjI2MzAwMDAyMzAwMDAyMjAyMDAwMDAwMDAwMDAwMDAwMP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABFEAABAgMGAwUFBQYDCAMAAAABAhEAAyEEBRIxQVFhcYEGEyKRoTKxwdHwBxRCUuEVI2JykvE0U4IzQ2NzorKzwiTD0v/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAECBQb/xAAwEQACAgEDAwIFAwQDAQAAAAABAgADERIhMQRBURNxBSIyYYEUsfBCkaHBM9HhI//aAAwDAQACEQMRAD8Af7XIJZ8qV619YpizAO9EgfOCQnkgA1aIZkgKTUO5rvR8uNKR5Y1C1zYO++86QcoumeJlASypAS7MnEWGrORoSNIhuy1zZhKJknAXZ01B4g1pBK7paRLSkIwUqlTOOoceUR220KRhSkMk+59unrDhqCKD+0BrJJE0vCXQJHLNs+O8JXaOwqlKM9KSlOIJUlmcMKvUEvqNKUYw+hSVy0rSRUO4HLTSB95ShMQUKqCC/X5VpA2Jpf1FMLWwYaGG0U7PbklIbXV+QgjZ1ijO2xp6wp2uzLs07C7oWSUPo2Yru4PTSGWx2jwAPr/fOrGsd6mwWIHHeJW16HKwjgYB8jX+2fGJ1qoAMhuMzw+tIoFYrXhv5RHabYiUnvJiwhO6lMOLak8A5+JYOW+8FHFKfPep9IkTNZ3Iag97OffCLeP2iS00s6FTCKY1eFPlmfSFq8O0tqnHxTMA2QG9c4wXUcza1s3AnVbReUlDlS0s+lX6jjA+b2rswDd75YeP5jHJVkqLqUVHcl/fHjJGgjJtHaE9A9zOqDtpZQaE8aprm1McbDthZioHFoM0pNX2Srl5cI5IFDEzBokwCK9XHaUKM8Gdk/blmWQoTA7ggKdPP2teRMTiYCKeIZ7uDmxGYrHGZIOaVEdYuWO9p8v2Jh6Ep82z6xoWKZk1MJ1lSjVQpmRU5O1I1Wkhg1VGrfEM5eEi7e26h4ZycQ3T4T5CiuVIb7svKVP8UtQUU5g0Kf8ATmMjXXKCggwRGJMt2qM9ep8i0eBDgmja+kbE1GXwGmWQ+MSS0Gr0Z/X5tFyprZ1U1zFYnAbPz+t4p+yTqR0H15ZRKV5nOmcVNScEO2j/AKRIotFYTKZZ5HgPjWNO8qwipJZWRRj0jFKen11EV1LJB4fXwjeRXNmap3aumzxJJY6epjIj7/iryHzjyJJCVmUFCoejfMRes+QNWNQIWJUuaJktKVgJSvEXPtpybyfkWMH+9IDAOWOTUpsczHmKG0DS3I2M6t6b/LwZe78JpiGT1PPhHqpCVkKzcZ8OER2NZKUlQdVBkARqciR5GJ+8ep2h5SGG/EUIwYv3haVyJ0tJCihainGATmPDl0gyuSEipqdOnvicTq0irbVba69NIXuwqnTCISSIndvbIPu4UPaQoKfmWOmxgTctq7wJCXJIp1D5H3wydqbOZkiYkEA4S5UcKUjUk6JGZPCOWW++Gl/drMo90zTJvsqm7gD8ErZOZ14M/C3PpnPGZfVJqxjmMV+dtEyHlyGmztVZy0Hh/mKHkOMIl5XjNnLK5y1LVuo0HAJFAOEbEBIpFm7bu7wGYsskGgI9ps88w7DmeEPNdtk8TCUf3lGyFa6JSVK2AjSdaGLHMZwz/smb4US5ZeYHxBwEjV3pi2ApWGid2Ospk9yJaiUhgsAY8WblbsTwyhVuqqQ794wKHIwJzAT4jWSTD/YPs/kqT4gsH+Y5xaV2PkylBrIuYQPzFQPMEs8ZXrqc4XOZZ6Sw8kf3nPJKWDkxvTcecdWuazyEzFSRIlompAUpKUpLA5OQKHhBlVmSpOFIAVygFnxIB9JUzY6UgbmcVlKpG0ox168risyqTJKHL5pD9CKwAt32ey1B5K1IOx8afXxDzjSfEamOlsgzLdOwGRvEmVUFwOseWaepKgpCikjIgkN10gneHZy0SVJTMS6VKCQpBcVoK4SU1bMRpeHZq0SUlRCFoGakKB9CyvSHa7V5Dcxd0J2Ih24O1zkItJbQTaAVp46U5im7Zw4gNQKcGubuMxQe+vSOQCZoYPdne0i7MyFkqkeZRxTw/h8uLavnYxR68biPk+UBXLpR9PoRFJW9KN9Z+sbTJ6VoTgONJGINkX5cIhls7D+31lG5iToWHLmJQ2cQhLE18gdH4NQ0i1IBYg05fp9UiSSMIJ5jT0+cbS0hLKrQjMUrnzEbKFB5njUvGgFG0duJ1092sSSSdU+aflGQPc/Q/WMi5IctdmxscRBGSm/TUQKuq1HFMmzAScSkIRwSSC/EmCU6amUlayqpJrmSpuO3ugZYqJDndtcy5J6kx5r4i6i06QM7Znb6QH0Tq47Q6LyJyDUyJ5enziyLYlwCRi1Y+frSFm8p5ZRSCShBIA3Z4FXd2iBPiUQ34f0hdXtA1cyh06txOhSZwUHGQpEVuUoAlLUSWffrRhvC+ntJLSkOoCjgOPhCj9pHa9RlizSlEKmJBmn8sshwngpYqf4W/NDNOu9tOMDuYCys1jJ/EFduu1ptSvu8pX7hLd4sU71QzP8AywchrnswK67u75aqqCEJrhb2nDCvWBy5wQmkOtzWYyrKlJ9uYy1U/NUDPQGH7mFNeF27D/ua6av1HwfcwfJuqUoYSgNWp9r+rN4P3JcYUQhQaXLA8OejiuuZMb3RdK1roKJzp6NDRYbvWJjqDJADAVJ57Ry7L3PePlEXPabylJSgkJoKAMdOG0WLslompExCs8+eUVu0linmUBZ0jFi8XiwnCyvi0Z2Xsq5Uo96pi5LbDg8DKLpyeYMnKkgy3OlBBLM5MWLPaIhLLWATT47c43lhKMWJmhRSynIO0psFcHmYqzIT4gACo1IADnjvA+0qZQI3ES2m1hRZmw6HUcDHqE4w6UszlRzbbOJu7be8IgKjLSa9LPjQmZsaRrMsxSnvFF0hJJG/CNLPbu8SU6g1i7ea2s+FqKDV4/rFjDEsfGfzMEsuE+/+IvqtilLMxRwgsANtuZgXet1TFgqlqCSCThIz2YiqT5jOlYKWWQSkpUA+XKKVktqgpYWoFIZIOEhyKKoeIg1NrKSwh7K1YaYh3kl1FQRhOSgzEGvQvEUitIau0d4yMKifabLg4AI/iBbn7gFhu5c1MxUsE92xWlqtXxN0y/VvQU2601cTj21lHwZPc15mzqwLP7lR1fwE60/DuOubu5IRqlyXqX0pXbDrQVrCKkBQaDXZa+lJT92WT4Qe6I1TqniRoNuUN1vqGDFbK9J2jXKmaOSQXZL658otpUOtB555wLTaGUzFuIy6CrZ5tFkrbC51po7kcNn3gsFLSZoHskH82Reu+jedYgmTXPnmPlVuGxjQqDCtaA+oGWYfh748mS/Ea5vxYPTzL/DhJJNiH5h/0/OMgd9yVuYyJJLt6SjjSnNIS7O4rvxyjexpc+LanntFmbIdjqzV2GWWlYxCQmvvjx/VEjqWDeZ6BHBoAXxLcyyNLWQsY1Cr1wgv7NHDiOb3zYgFuS6lVLUGdG1rWOn+2ks4cUI4ZZafKELtZYlInOBQAAqI5Z8Hjr9IV1DxOXYTg+YClWdEsLnzQTKlDEUkllqyQj/UrP8AhxbQsTbQuYpc2YXXMUVKJ3NYM9trSQJVmG3fTW3VSUDylsrnMMBrtu6baViXLHNVWSOMdF9KjwO8xXqY5O/iTXFdBtM7C7IT4lq2T8zlHSrqkS5hCgaeyBsE0gV2euhMp5EslSip1rNHLCnAQ5G5UlJDkAoKBhphcMSk/m4xw+su9VsA7Dj/AHOvQopX5uTIOzRdUwJqAojENSFEGGOXJ1MVrmutEmWJackj368SawM7VX6UgSZKgqapgWfwu9XAbQ0d6QFK8E5g3JtfCya0XshUwJCwEofGT+I7CmmZi0i3SVskLSWYEEtTZj7oV7/VKstnlpUnEpy9C6iWJLgfVIUVGfaJjSkKwkirNWm/CNinWMk7Q4pRhsSJ0+dah3qEJIShJHiV+NRCmSg6kAEnmIE/thE61qlJP+z9rZxQtvWCEm6QixHGScCSoAgULMDQVI34QB7KXeS66AEkuedYFaq6cY7bSqgu5B42h22S3qB4h7Jizc8paUqQpJyfFSr1oxemVQMxG0jB4gCaUc60em4jwzx+djvCYf0zvuZTEsMCCUz0yZhJLAZwTvO8gtCQlJI6QOtl2CYScWedBlF+ySglLAO0UH+XAPPMM4QkNyRNLFVKi1f0ija2CwMJIUr11dtIKMTlQxvZ5SQplERhG3mNYGTAk+4pVSEVJJJLuct9AwYaQMvOR93BmykJc4caQ4fCXxJb8QOhBcEs2rTiClKrV4gVZE+NKgz+b6esM09U6PljkTDqHXB5iJfdkQrDaJAaXMHi2Sur8gcwOBgZPBGFaC0xBCkniPhoecdDkXGlQmyUJIQoALSNFGuNPXCW4c4RptmUhakKDLSSCMqiPQUXA4Kzm2p2MNWG099LStIpQtxyIyZwqlHygjNW4o4qdDs7knVsoU7pnYJipX4ZniS5YBQz0OmlMngn3nEKY1cuXqHIPQ5DOOlnMRxDcueViv4T4mGdacnFaaAx5jwsVKKicgA2dQx0Dkcn4xRs61BDtqCUkbOXZ319I9XLZCXLijJcOHqWybJqUyeLlQt96T/mf9P6RkUPvI/ylf0RkSSMtpSoGiiTnu75ZxDMqSCzZ015RNa5oehJ2OYru/I/rFGcAoVdxWhqeL8zHJ67oPV+dPq7/eO9N1IX5W4/aF7HLZAFW+vhGl82ZCpSlTaJSglZpkA5euzwDN94CylFyHBHk1NekDu1/acLsdoSl3KUoqDULOh/lC/KE6Krg4VlPPMJbowWVhOY3tbFTpkycqipqio8BoBwAYdI6B9mVhQLKuYaEhR51wj3Rza1TABHYPs4s6VWOSd0EHiQaw38QZhVt3M10wAbfsJW7KSVCbiUGfEpz+KpDwx2ztBZ0TBIVMwzKHIsHydTMCdBy3gDfN4KRaf3aQZUtAQF/mXqH10hAtNomTp61vhxKJKiQkDjXR2yhKqnWx1cYnRsGsB/8TuE895LOFeF0HxCpBah6c4Q7tu+ZInBU4oUpSglKgTmDmX1PxhuuKfikoLgukFxkaZjeF/tdPQWDtqHGbVDal8ukBr1MSg/MzQArEHiMVuvDuZExQAWpOaX4QnXBf8AMtU3uz4cyAmjDiWpQwwXJYELRLUDixYcRUcWlBXasF1XVJlpUiUhKCQ5YM/WIpwhGOOPMsWJXlcZJ7wde8rBJVKVMJBbwg1qa8T5xPctlCZbJGkQIwzVlYD/AIR0z9Yt2FM3xsU+E5NXzeFVbW2O0pvlTGd+TI7aopBUfKAku0KcEqCApQAJ4lhnuYnvRUybMwJBSKYn0/WLlru9QSgS2zDqOaWIqBwq3FowiKTloXOhQO5klmxF2UCkUc0c8InSgpYN1ieyjwjUR6qXiplxjDIhAxAFzk5kRSQRhDg5l8o1mir6xKiSQDhUcRyesTy7PViQYyyZxiZ1hZXu+WnE/nFW+D+8Bqwz4wRMxEtShk1S/wADC/Nv5U0Lly5YLkoBPqekHCfLjPvNJqZ9QG0u2m1qQMScyH+UcvmXhNmTVmcrFNBZRYB2oKDg0dKmySmU6y+FLPvSOb9pEYJ6VgUWGPMZej+UPfDHw5Ru/Ex1Vfyal7czy1JISJic0EKHMZjqINfegtpjlQYUFBkw6AN5CBNjD00Me3TNCHSRVJKQfdTdj7o9Eh2xOM43zDsy1AqZj5tUglhEX3lqjIl3dvXpFeygFIc4QDrwzfz46xMMDDC5JxHJnYPTIfl84JBzPvcv8o8hGRp96V+U+Q+cZEkj27F0eEsa51LCmmkUlSyAMX4iogksSc9OJA0zi3aFKrUtV2oMnHr7/OjaPCRUGjBtm+qUitO+ZAdsSC0SchQkEliOOg2yf0hU+0NWGVIlsxWtSiOCEgDT/iKhxXIdW7CpJYg7OawifaPMJtEpFWRJeu6pigfMJEU+ykzdYywETJ8sqISMyQBzJaO13VdSkWZEqUcAQlsWrP4mO9THJrlkBdqkp/jfyBPwjvF2pdCRu3pHF+IOSVQfczqUDSGf74i32hnBNmTJkg4j4cIqW1JOeWvGEm12QiclFKhgC9CBV9zw1jr0qwpSpRw55Uy5Qn31dIM3u5aXxEl2yarvkA/WsKdPdoIDfeP1OjgoPfeEbjl4LGMM0JGFgsB/IHrSEy+JS1KlrMxTLX3YxYUlggqqZaRSvsuR8C027JsuWEGarBmoegYaPw+EV5eFdplBJKggHClqA0xEvqfcPM1LKgZwec4lmvfYg7/4h/s3ZO4QuYsBqMBqwAHMmCU6ROXKK5s0DEKJQAAASGD5nzi1NkjwAjUFudPnEHaHxqCQzJqBx0eETZs2TuYH67AR/MSha7xTZUywJalp1wN4QNWOeusF7ktyJhxoLpWxeEy322ZMVhLlIowTz69eMFOzU4IXhDtmaj0aM6Cqhu+eY1d03yEnmGipJnLPGJkJKjhG8UpagpWIal/ODNkSEkGFkGs7+YpadA/EitUvupasRYjLnSA9qvlMlIKy5ag3iftpbwjAhX4qnmSw9PfAm8rrVOlpAbwly9KNkIYKL6gB4munQFAz94WsV5pmpStNAcxsdoK2i0CVKMxWgcDUwv3LYBLRm5ID1o/ARevFapksI/C4fpGQyIzdx295VtQLADjMityO+l96kmo5UivcNgQhCUpctqaknc8YP2GUEpCWGVfKA13qUmdMQA1QR/eIq5IGef5/uWr5VlHbj2kt4yHSxjn32hWfBLB2II86+kdDvub3aMSy2Isx98IP2gSFTZIwVg3Soa+oUHzIctQ3sYIuudQGPbVLacoDJQCm+ukUbjW6RBK9AQZKxqlQ8iDpwj1S7GcJuJ7Zl5+E+RYdTm0bqtBUGJYEU6AfioA598R/efCzVLMSogjdnjWXOzGeWanFeOe+sEg5d7r+IfX+mMjzEvZXpGRJUf8AACt1AvnmQdXJ20jJqAA3qoFm+BDb9IvFIYlmJ9ecVbVP8NBpXhmC++UXJNpUgpZwATV/fk5JY77tHL/tDV/8tY/KhCa/y4veqOlSZooFF6uXGdaNmSzGOXdvVvbZ/NH/AIkQOz6YWn6xKfY1D2yXwCj6N8Y7RZrWlCUYlAEqwgbnhHHOwJH31L/kV70x1+Sl1h2Z3BOh5xwOvOLh7TrUgGs58mHJx/F5QFtUsgkAjxZ6ZQSm2kJFTXIDnCl21vjuJSagLUGD8CK+sJWA2MFXky+nQ5hefZcRNKkAPSgBJiS7bFKCgcDYTqNWzc8C0Bruv9KJSVzVAKarkOegyhislpSsJUk+E1ca6h4yS6gDxC2o6A548zc2Xx4lEnnxeBllm4psxJqUqb66QKvS+pk+bglgpTJJCmV7agSACBkA2R35RF2ZvRKLUqVM9pXiK3FVEvhbWmo8hoVqARgHjc/mWlbhCTzjtL9+WValgSsICSFLJHEpYFs6pie0XeJcqYsklQTU8MvdBK+ZiUIIQHUogvsxf3xBaFk2aYpdAUn9OsYcg4Ub4Eylj6Qe2ZXuOzCZJ7x/F+XJtR1gktaJaVDE6hUjPTIPxheuaatEha0JIKsLAnLClnpyy9YyxJUpyS5NSTGLCi4Cj3hGpZySx2zKF7hc2fLmOpbOVBmCR4difP8AvDSFjBVLFgzHoaCBws5T4UiixVTszZ9TFGTLJmKwqUoSyEqcuTiFTTmPKIzF1x9psqrDA2xCNlmUUNjFK7rUuXaVylklC/GhzlTThT6eLFrsszuyZLd4Nw4pWuUQ/ee+lo/At8Kh+VWrHYiojFQ0qSRsdv8A2Q4Y4jHd8zGaZPFTtCe4nIXmFKAbeCd3yhKQEprhDniYD9rbMuaUL0RXrBNCVp8xycxKpg12B9O4la/iq0GnsJ98CLdZwUkHaGGxzAZbcIDWk4kqOzwH1CzaiY/XsNGNhOd2VGGdMQNFH1r8YJ35K/8AjylNlNIrlVPMaiBo/wATM5j3Qdv9DXek/wDFT7lR6+k5VSfAnnrwA7AeTFtM746n518ot2e2KAYFQP8ANTDkBhwvtWBsmady2z/I+kW7MQ4NBXbm+eYhiAk2NW58oyLeA/wfX+mMiSTqkxYcVyNRFWeoNUvn4WB31fh6xMQ1QkkN10+mjVTY6PptStDWhLj6eLlStJkPrQULVbNqJBc8/hHL+3crDbJo08H/AIpY+EdilopQHXJqPq9KPHKftRkH74RkVS0qOW6hoSH8LZxiz6YSo4cQP2NmhNslccQ9H+EdatFkMxCUtiGIYg7OHp616Rx24VCXaZJJYBYrzcfGOz2dAKkzEqKWS3Bsy4yJpnHC+IAC1WPidfp2IQ48ypbJ7T0zXV3aFYd6lhA/ttPlWkISJYMxLsW0aofm0Gr1syVy8IUzqxN5fKKHZi5pmMmaDTIqBr13hNXxup3jtYrA1v24EVrs7PTcJMwu+W4Z8no+Wb5CPV9oZkqURKGHDMKQHfClGGtS6lEqG+R6OThJUk5gmmUId+qRjLJEtCCVFYDHMmj+0olkgGg4QbprDcx1j2hmsysZLnnhSZjsO8UpagNSuqoCyOzc1U9KRu6cOoeh5sBAC7+0SZasTudQ9OnXaOkdm7wSoJnh0qwMH46HrEtD9OxY8GZW4BSa94WtlnUiWhEw+JhXjFK/JykWUYiCCrxU2Iw5cYr2uRNmT1EklFCDoDsPWJbVJWuWUksBm9co5+dL7cGBRPpJI5yZ72fkvJcqox6vlSIJlrRKmJQoHxZK0+fpHlmvFEsJllQDigil2lvDBLJCXLeDM12plT4xAmpwMcwwU6jngw/YpbqLAEs8R3Td6guavRRDFta5+kRXBbfAlRDFhx09YvInpCJi1Gh20OrCMrscH7xezUCQO+JZ7nChQB1c12zgH9yxWgJBIQHXTUmgiazXu6cShmCG9MoryrzShaVkMEhjxi1YhxtNJW6gxkFrZRDUAdX0K7ecb2GaichQSpKkl/ZLseOx4QkXvarUZizKBSheFi7HI4gNjlXjFvsfda0ThMKigpBxu7LB33OzvD61oykk/wAMWfp8IWziGLKBLWZaqZt1gbbrbKRiQCCo5gac4l7YzghaF8QemvWA9umpCCSa5kn0b184SWvfHviNVjID+YmLUPvK22+Jg52tW13SuM4cckGFy7Vd5OWri3l+rwd7drw2Gyp/Mtav/WPW0LpQA+J5+9tTk/eKdnXwi9Zil8qQKkNxfjlBKQTp14+Xxg8DL2IcPKMiJh+Q+X6R7EknVpC2Zsg+lNWq3ujZKwTvT8NK0yo+jx4qc1Nc6c32rm7iI5Mwh+pbQHZtIuVLOHEGD+E4smfiCIQftWR++kTAPaQpNS9EkEOdfbMPkk1PrXpn9VEK/wBqlmSbMiYn/dzATr4VAp95TGXGRNIcMDOX2sPXIx2TsvPE2Qgu7oSfMCONWhMPH2a3o6DKJ8SMuKTl5Fx5Rx/iFeqrV4/3Or0x+Yr5j/bp0mSUKW9ci1BwJ0ihb/tBklISlK9asHYM5wguBUc84IquwT5ZCw6TQiBR7GypfsigyCi5HUxzK3UVnUp38RoJWT853EpXjZDapSmWELLYTm7HhnR24mB1nuJRlGWoqUsFziOY25cOMFLynmRL8GYz5QFTfs1YUtBGJAwuoOMwa7vSNUayuE2GY6ayV1doPu3s2kTlqmy0pSSyEmpJ0CcsR+cXL1v0SpktEotgV40pUKjIimZ9xERXffSzau+nAJTMSUpWUuZTA0BOTmh5wu3UxnuoukE+IAl2134w/wCmXOp98D8QKhV2G3tOrWm8AJaSgu4o5DgUctweFG8O1KkEpkkv+JTa69afWrLZ7QifKKErahSC2Eg5O0IVoueYhZfCwVU4huzgPr5+sJ9MiZYN28w9QUA5EjlqmrmiYsknE8H5l8KEsiYBiDYDm5ORpSIhZQpRVLKhMSBQMxDUevs8SN4K3hYETEyzh/ehiDkKZ01JYwSx0JGR/wCQeokmFLnJwAqDFzTL61i2s4UKxUABZ6P55wOsMwyJWOaxWVEJHCjk8HiNM1c441knPPbLLQRzbEwSZACx+0rXBae/mqBoE6DjFi0SEyrYmWVJWkoK/wCQVbF090Xbnu+WhbhOF9hoA8L99XkVTlBCaroCT+FzhfYatxg6AMx0jaawXfGdgI12mX3gQtA8BAL03aGC7LJ4KseI9YEXNYSJSElyAMhlv1rDAJSZUpKQQkavqSa+Zi6Kx8zkbCcvqbNtAPeI3b5feLRLQksh1KLbB8hkP0hc7VWwSZIWWONDN/F88oeO0lslolLSlitdCWbM6nZoWb7uaXOs8pKyXQpKiN2NU10IgtBDuurjP7xgMVpyBjbbP7xP7PyWDnPM/GCP2nsn7pJJ9iTiVzV4ov3FduOaiUBVSgD1NekC+3N9YrfPUn2QQgckU95MelXacJt4tWcJA+qwSswSzH3t8IsWS2S1e3KHNND6RaF3Y3VJVi/hUwPQ5PzaLzM4lVkbD+r9IyPfudo/ypvkYyLlTp6Ev00bQUatXzj2YXDinEdSYyVNORLh/r6z4xutKc2L/wB/g0XJPZasOoqHNPpuUUe0dk76zTpVHKSBzFRxzY9IukjPfb195j0o0YkDanKJJOIS5bpB6GLHZ+3fd7RLmUAfCp/yln8qHpF3tHYzZ7VOQ3hUcaeSs/JTiAlrXCjrklTwY8j/AChvE7zYZ5wYgf1jf72VAg5wi/Z/2iVOlplKzl0ff8pPQEdDD7dsvES+0eZvreuz0p0cqU1yvbrsxynKX+RhKRZRJmFLO5owzDU4AjLrHSryng+FJwpSPEfhCnes+YtJElKVLTk4zHCorG1f020Kc9sw3SWsykMNv2gCx3ZNStSnZBqZbmu/izSTm8VbJ3sxShJkJT3bBWKtSAS+Wnwje3do54mJlpQxoC6XL68gHEa3kZxVNlrSUsRlkTQ6ZFtYer9Qbtjf+fmNFN+0L3UidK8c1IP4QEhgAXo555nKDFjsQWkqWhirTYNSvKBPZW+FFXdTiSC2EkdA5A10eGK87RISvu8Y7wCqRpCVwcZOOIvYSH0ftK82RLkorQClVO/zirJngpmKAo7oB0rnWtdoktVlceJQwiuEhyd24tlEku0SykCWlgB+IV9YEXGkkd5FGNtzBl7z8ShiIZIApQcfWLN21BALAhiX+cCr2sipktSU5qzDtTnGXZdwsYQ5UpS28IJLD+XSLCKyZzv4hyP6RL98W8pxISotqX0gVdVjSVvmo5kwZVcilhalMly4TnTZxHt03eMJq5cgPmKOekTUFUgczXqIq4X8xiuW1d3LQFkEpS5IoKBhSNBeK7SogMEJq+pbh8Y9uOciYFS8QUdXGmXlpFyx2Lu5qUoQe7KVEnQO1B10jYV2AUnbxOQ5RGYkb9oMvu7TNwhWQOQptAi+wjvMAFJSMSgNVKfCObQzWy1pl99OUfAhL8GSCT9cIUrIRMkqWpwuYozFvo/sp5hLQ90FWp89hBXWt6en+bzOzihJRaLUvKVLUR/MQQB6k9I5WFmYsrVUqJJ6mH77SLf92sUqypLLmnvJjaJ/CPj5wi3cjKO72nO7wlYZUEZMpi4LGNbHJpFyUisYM0BJ/vU383pGRJ3cexWZeI2LllJByH19Z9Isql0cHMMwGvWBikVOFWein50rSJJc1SSAUkEZBiX48Q3xi0vrfgyrKXTkQhIlh2BLhqM9N8usTJlONtMj/eIZVgmqBXgIDpoQxq2mbZRbnyMBwKQVEh/CHB8uUFyIKIn2oXTilotCQHl0Uwahz6jOOeTJQjulqu7vkqllJIUk+HCxw134+ccevS7VWedMkTEspBOF9ngNg7iMUNvpMp3HbzZpyZiXYUUBqk59dekdkua1lSEzJagUqAII1EcZ7uGbsZ2nXKWiRM/2RLJOqSo5H+Fz0fbLl9d05tXWv1D9o/S4XKngzpUmepKSFMQSTWE21SrQm0FYmKwJOItQBJLMW0Dw3GykqBJJAyDxY+6IUliA2RpHIoOG0/vHksWvJxzzKLSlB+7SuY3hU1Qee0Drou1QUpczxBi4Vlq5aJ+9mSJjJSFJVRiH5MdIv2tExctScJSoBn3HDeCbgc7SySmw4PfMB3xZJUtCZ8vCZjpUgJBYAHYniTzgLJxTJqpiqqUXqMhT5Qes9qRKwpWzOUkfxAe0kGuE1fY83j2XdQC+8BBl5ncPtvmYOjhW0t+DNDYZMrrtgIShRoCyTkTkwJ0HGucH7FYkS1NhdWBySacgYA2NEpS8SiVhBo2Tjct7oN2+3TF/7NIACcxUwvcy69pLQxwo47xbvi8e6mLCEfyh9W82f3RvctgmzJiZiiSCEjEc1KOo2SPrWANunTJtqUPZCXC1ENV9jlnD92ftktElJUr2aVz5c4KUFajjfmS1yF+X2hVVjAlNVRbPUxRuayKHeL4ltSdTSN0dolTCUS0AgjNRIw8ePKLNx3bMShRK/ESSSRvmw0gejL6l32iRLojBts4ntxWCXKUogutbudhUtwgyXUpOeFq0zzzOkC7CwmhCQVOCFKanD4+Ubdq717mWEo9tRYDhqeQ3huvPp62/t/qK2AvYAOT5i12wtySEWZLeNSVL18AJUxHFgG5xBd0pClqUokSpY7yYTkEpyHWggROQDNM3PRDviVX2uCTpwYxS+0W9hZrMLGg/vprKmkaDRP6c+EdTo6iqAH3guoYA4X2id2mvtVstcyccipkjZI9keUS2RTUAeA1hkk8oO2WSwpBrbNOwlU06t2l2SpRPtsNm+jBqyWZ28aX4vXq9PKF6WogwVsU2mr845tttg3BnSSmsjGIb7k/lR/Ur5RkVv2pM/wAqPYB69vmE/T1+JLdXaFC2CjhOyvpjDtYLWyZa0s1Uvmc38o5wbChQqAOPzhk7KKIlzJSlOxxo5UCh6esYu4yvIkesEbx9k2slo3dqtUUB2gRYrS4B3b59co3t05XhIPhS5Vvwy0DGD1dSdGZzLKsNiGJa/ES1cn1b5Qifav2ZM+X95lp/eIz3Iyf4eWgMOFmmlSQtSiMQdm8ucarWC4PidJoRRtcqVdqwwLyuDBaJ87950OsSSsqwy9v+zBkTO9lhkqqwrh3B4j1FdDC5JLinlDIKsupeDCAng8zovYvtOJqBJmlpqQwJ/GBr/Nv5w3JtIAbCeJ08o4fUEEEgioILEHgdIb+zvbkoZFpc6CYBppiHxH6xyup6Nsl6+/I/6jKWA7NHKdOQlyFkK2UkEejH1izd65k1eNQozDYDg8QWe3S5gxJIU+RFYI/eKBIGkc/V/Sx47YjDcbDc9zA173OjF3uA1zOrA7bQHvq2oIwooDTbKj++GK/yvuizghNDtp+sJU5CzMJWSpZAd8ztzPGLRQ2c9uI305LKCx4ly71+zLDBKQ7DMk7waTOwJUQWoa7UgTdi8CiJktSFEHDiGzeR4RfQO9UZRIdQanGMujMwhGZcb8RYslzLmABKlAkuo5kk1J5vDfYbnCAnGSoDcvXUncxluKLGEgpJDMVpD1YNycvWK8vtegIUDIKny8VS5b4w6tFt+/YRO7q1GyxpsEhAIy0DgQQtiSEKEtLk8YRLPfTPMl48aiwS9EmmwZs4a+z18CdL7tRaaQSQeahSgegB6w/+m0oR5nKezU2eZbuWeFBW6FYahqsCff6Qh9s72My1TJCRUJTiUdEkAhKdnzPCH667IiShZCSApRU2dSAknerP1hCvmzypE+02m0KSEKKVAAupfgSlKQM80l/KIiixgp8ZAlq+nU34lafbUWWSq1z/ABLJPdA5rXu2iR8ODRy+1z12iYqbMLrUpyfrKL/aO+5ltnFa6AUQjRKdAI2uexNiJyA9dPjHRb5V2gUOWy0rSkhNNYtpUAKmIZKPGVHTLrDFc1xmamgGI7wq6ZMbWzABMGy5Th9IKXeBQAseMbrsRluiYnCdNiDVwdYOS7GjuUTGIJd9uYhQJ6hKnbEae7QAwGcys0exd7pH5B/VGRn9F95X60eIGmJwk4QojJm14Npryi3dN591NCi7AsaNQj68oum7gfZfOjVIL6B4FXvd60JUQ6j7qnTVxThCquG+Uzof/NxiN8i0gFASoNoBVxWlOkFrOtKQtTO+Y3ORoY5rcd+UwTFMR7JfJszDFKvehSS7sxG243BgJV6jF7em1cRkVbljvCopw07tIorLxYiaPiJG1BG823scIzNAPrnAWyzm8bmuh8LGnUwMv3tVKkBSXdZHsCp0zOnv4Reqy1tI3MB+nAmvbC+UIlrK6ioCXbEo5V0ap6Rz0oChjl0V+JHxHDhEV52+daF96tyNBoBwGkRWeazAZiO70XT+mhBPPMS6uwahpHHeWBOxZ5xgrSNxhmVyVuNefGNCkjPzhg144gRaG5l66LxnWcvKWwdyk1SeY06NHSuyvaqTPZC/3c3Y6/ynI8s+EcxlrBAEWpKAYRuoRzkjfzGVY4wDtOvXzNBlupiRUDUmF+ySpaZhnAKXMNCDUINByHOFq7+1NokEOrvUZYV1bkrMeog7d/bezslJkqQBqCFByak5Ewi3R2ZypzDpeqLpMIX12bM+QrvJglqBCkrZ8BGZ3ycdYHdirpQqd3n31M5IZsLuWFHxey2zHpFm+u0cm0WaZKlLUkqBQXRmlQYsQaU/tFLsVZ7LImgqmHFkPDhHUk1hzp6GRCP594vZbqOTOiW6whaUhwEfjBAOINkX4tHN7bc/d94kE0nqQnwue7AJxHqQOPWGS++1ik+GTgb8ynJcVyZtqvApN+qnKHeFIWXDB2IejjJVXpQ/EyK2oFRgQII4aXLj7OImIUZiwCKCuXEg5bsfKDlyXKmz45hmY1AFhoke8lhC1JtC5aWJCUgVxM2FnzgfbO2hmtZbKErUXGIkpRQE1NSokDLUwZqmYHB5giyiMHaHtrKlSkmYpcsryAQXzYUzyD5ZERyntX2hmWtSUkASpZPdjCxL0KlHMqPkH6xVvBcyYtSpqiqY9SrTgBoI1k2YmJV0qI2rcnjJkNxI04wJHZbI+kErLN7tTBi4Ygh92iGYpQS0sEk0cB/6dz9aRau+yAJaqphzLgt1NPf0jdqs30mapdVzqg4I/eNkHyjo3Yu2SQe6IOPCVOcmBSKF3eu2hhKtHZ+aTiBB4GnuzPlBK7rLPTRSmHUwN9SjM2mliRHy8LXKZlBJGxAMCbRMXOPhFNzlA0parrWrkwi2bRaFIwoQx3OnSFWe1voU+5h1StfrYewk/wCyT+c+QjID/si1/wCdM9PlGRXo9T5E16vT+DGiRZFCWpU0jC4ampMeTJeMENszgMcvSJlqScKTk2Rc00byieYXS+ojnWKMZEKjkGc97WXKZY71OT+WwgNLtqwGCyBtD/e6cUvAtnUw5l2SPNoC3V9nylSxNtUwypf5Uh1kaZ0S/EGDdParJ8/aOW2EKDneLNpvuaQEmaoD+Et5tFENi8dQfOGe2XBZkkkS1/zKWoknTIttpA223KB7LhnPiqN8xWGq7aTsu0CVs/q3kthkJIYNwO8Ur7uYo/eoHh/ENuUQ3baTKX4hTbbiIbZEwTUvRteIizY1T6hxBvUrrgxSu6eC31tF5UtKkltGLjblkecVb9uvuF40v3atNjG93T3yOfLjrzjp12B11Cceyso2kzWZZVCoD8s/rzjRdoUiinSP4g3kYKy5pyNd8iwOVYkQhgQHr9EUpl6iNFQeZQYjiCZczHx5F/R4spkH8pizNsMss8tOew4UpGv7KkGuFstSN9iKUitAmvUabyJiwGDxs7Z+paIRdcoAjCSSNFr5/mqIxF3SqMhPkDnlUxegStZkyrXJB8UxL7JJWfIPGKvgs0uSV7GaWA5I+YEZ3KRQMOVPrpHncuQkE7xAoEosTKtu7+dWcsqH5R4Uhv4RnTcxBKBSUlNCkgpIoxphI6iCJklmybeCtg7MFSRNnESpQALn2jWmEFmB3PBni5mUb4uz7wBaZKaqOGdLH4ZmpA1SrP6MQrsKZSf3yg/5BX+r5edDFu9O0EqU8uzJw7q/EeuY555MEMRElzXfLtKMctbzR7SVZ9BoOMZ3M1xBcuSucp2wJ24bcuEHbuu4JFBGS5JQrCpOFQgnZxlFgSjPZdmi3ZbICcokso0MXrJLwvFypH+zw4pSCciyADKNE6RclL2ESSRfdeEZFpjGRJIuf71P8p/9ImV7J5/CMjI8w/0GdcciVZf+Il/W8G7/AP8ADL/0+8R7GQKr6W9oS/61/E55aMzy+MaXn7J6e4xkZGq+0c7xUvP/APPvVDB2Y9gch7zGRkdG36BAf1GZ2o/w55GFS6fwfW8ZGQ70X/HOX1n/ACCMFj/F/wAv4QRMZGQ7E5Xt3snkr/uEVpWSf5T7zGRkSXJx7P1smI7P+Hp74yMiSpdPtHn8DEc32lcle4xkZEkluw/4iT/zE/8AcmDn2i//AGTP/DGRkZMsTls72vraD/Y3/FI5H/tjIyLEqOfaXIRBYvZEZGRJITlaRelRkZEkltOQ5RMnKMjIkkjjIyMiST//2Q==',
        [
            new Ingredient('Pasta',1),
            new Ingredient('Cheese',2)
        ])
      ];
    
      recipeSelected = new EventEmitter<Recipe>();

      getRecipes(){
        return this.recipes.slice(); // returns a copy of the recipe 
      }
}