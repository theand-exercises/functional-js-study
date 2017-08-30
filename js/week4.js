!function(lo) {
    function to_number(str) { return parseInt(str.replace(',', '')) }

    _.each($('.movie_box'), __(
        _.c(movies),
        _.t$(`
      .header
        .title 
          h3 한국 영화 무비 박스
        .filter
          .rating
            label 등급 
            .inputs {{_.go($, _.map(m => m.movie_rating), _.uniq, _.sum(`, _.t$(`
              input[type=checkbox name=movie_rating value='{{$}}'] {{$}}
            `) ,`))}}
          .genre
            label 장르 
            .inputs {{_.go($, _.map(m => m.genre), _.uniq, _.sum(`, _.t$(`
              input[type=checkbox name=genre value='{{$}}'] {{$}}
            `) ,`))}}
          .director
            label 감독 
            .inputs {{_.go($, _.map(m => m.director), _.uniq, _.sum(`, _.t$(`
              input[type=checkbox name=director value='{{$}}'] {{$}}
            `) ,`))}}
        .sort
          label 정렬
          select
            option[value=name] 이름
            option[value=attendance] 관객수
            option[value=comment] 댓글
            option[value=like] 좋아요
      .body
        ul.movie_list {{_.go($, `, lo.items = _.sum(_.t$(`
          li.movie_item {{$.name}} | {{$.date}} | {{$.director}} | {{$.genre}} | {{$.movie_rating}} [ {{$.attendance}} | {{$.like}} | {{$.comment}} ]
        `)) ,`)}}
        .extension
          .btns
            button.btn1 가장 개봉한 영화가 가장 많았던 해의 총 관람객 수
            button.btn2 2000년대 개봉한 영화 중 가장 관객수가 적은 영화
          .results
            .res1
            .res2
    `),
        $.prepend_to('.movie_box'),


        _.c('.movie_box'), $,
        $.on('change', '.filter input[type=checkbox]', function() {
            // console.log(this.name);
            // console.log(this.value);
            //선택한 키의 이름과 값을 가져옴
            //전체 영화에 대해 필터링
            //그 키와 값이 있느냐

            const checked_value = _.map(document.querySelectorAll("input[name=movie_rating]:checked"), e => e.value);
            // console.log(checked_value);

            console.log( _filter(movies, e=> _.contains(checked_value, e.movie_rating) ));



            const whole_checked_value_map = _.reduce( document.querySelectorAll("input:checked"), (result, c) => {
                "use strict";
                if( !result[c.name]){
                    result[c.name] = [];
                }
                result[c.name].push(c.value);
                result[c.name] = _.uniq(result[c.name]);
                return result;

            }, {});
            console.log(whole_checked_value_map);

            // function matchingCriteria(value_map, e){
            //     "use strict";
            //     _.reduce(value_map, (result, o)=>{
            //         cosole.log(o);
            //         cosole.log(e);
            //         if( result )
            //             return result;
            //         return _.contains(o, e)
            //
            //     }, false);
            // }

            // console.log( _filter(movies, e=> matchingCriteria(whole_checked_value_map, e) ));

        }),

        $.on('change', '.sort select', function() {

        }),

        $.on('click', '.extension .btn1', function() {

        }),

        $.on('click', '.extension .btn2', function() {

        })


    ))

}({});
