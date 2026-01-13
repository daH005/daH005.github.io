from flask import (
    Flask,
    render_template,
    Response,
    redirect,
    url_for,
)

from config import Config
from data import alive_employees, dead_employees, trains
from functions import take_before, take_after
from paths import TEMPLATES_DIR, STATIC_DIR

app: Flask = Flask(
    __name__,
    template_folder=TEMPLATES_DIR,
    static_folder=STATIC_DIR,
)


@app.route('/')
@app.route('/transitions/start')
def transitions_start() -> str:
    return render_template('transitions/start.html')


@app.route('/transitions/general')
def transitions_general() -> str:
    return render_template(
        'transitions/general.html',
        back_endpoint='transitions_start',
    )


@app.route('/tour_3d')
def tour_3d() -> str:
    return 'В разработке.'


@app.route('/respect_book')
def respect_book_catalog() -> str:
    return _catalog(
        back_endpoint='transitions_general',
        card_endpoint='respect_book_card',
        objects=alive_employees,
    )


@app.route('/respect_book/<string:object_id>')
def respect_book_card(object_id: str) -> str | Response:
    return _card(
        object_id=object_id,
        objects=alive_employees,
        catalog_endpoint='respect_book_catalog',
    )


@app.route('/memory_book')
def memory_book_catalog() -> str:
    return _catalog(
        back_endpoint='transitions_general',
        card_endpoint='memory_book_card',
        objects=dead_employees,
    )


@app.route('/memory_book/<string:object_id>')
def memory_book_card(object_id: str) -> str | Response:
    return _card(
        object_id=object_id,
        objects=dead_employees,
        catalog_endpoint='memory_book_catalog',
    )


@app.route('/trains')
def trains_catalog() -> str:
    return _catalog(
        back_endpoint='transitions_general',
        card_endpoint='trains_card',
        objects=trains,
    )


@app.route('/trains/<string:object_id>')
def trains_card(object_id: str) -> str | Response:
    return _card(
        object_id=object_id,
        objects=trains,
        catalog_endpoint='trains_catalog',
    )


def _catalog(back_endpoint: str,
             card_endpoint: str,
             objects: dict[str, dict],
             ) -> str:
    return render_template(
        'wrappers/catalog.html',
        back_endpoint=back_endpoint,
        card_endpoint=card_endpoint,
        objects=objects.values(),
    )


def _card(object_id: str,
          objects: dict[str, dict],
          catalog_endpoint: str,
          ) -> str | Response:
    if object_id not in objects:
        return redirect(url_for(catalog_endpoint))

    return render_template(
        'wrappers/card.html',
        back_endpoint=catalog_endpoint,
        object=objects[object_id],
        prev_object_id=take_before(objects, object_id)['id'],
        next_object_id=take_after(objects, object_id)['id'],
    )


@app.route('/transitions/awards')
def transitions_awards() -> str:
    return render_template(
        'transitions/awards.html',
        back_endpoint='transitions_general',
    )


@app.route('/awards/best_depo')
def awards_best_depo() -> str:
    return render_template(
        'awards/best_depo.html',
        back_endpoint='transitions_awards',
    )


@app.route('/awards/boss')
def awards_boss() -> str:
    return render_template(
        'awards/boss.html',
        back_endpoint='transitions_awards',
    )


@app.route('/awards/direction_book')
def awards_direction_book() -> str:
    return render_template(
        'awards/direction_book.html',
        back_endpoint='transitions_awards',
    )


@app.route('/transitions/dynasties')
def transitions_dynasties() -> str:
    return render_template(
        'transitions/dynasties.html',
        back_endpoint='transitions_awards',
    )


@app.route('/dynasties/absolyamov')
def dynasties_absolyamov() -> str:
    return render_template(
        'dynasties/absolyamov.html',
        back_endpoint='transitions_dynasties',
    )


@app.route('/dynasties/michailov')
def dynasties_michailov() -> str:
    return render_template(
        'dynasties/michailov.html',
        back_endpoint='transitions_dynasties',
    )


@app.route('/transitions/ecology')
def transitions_ecology() -> str:
    return render_template(
        'transitions/ecology.html',
        back_endpoint='transitions_awards',
    )


@app.route('/ecology/2022')
def ecology_2022() -> str:
    return render_template(
        'ecology/2022.html',
        back_endpoint='transitions_ecology',
    )


@app.route('/ecology/2023')
def ecology_2023() -> str:
    return render_template(
        'ecology/2023.html',
        back_endpoint='transitions_ecology',
    )


@app.route('/ecology/2024')
def ecology_2024() -> str:
    return render_template(
        'ecology/2024.html',
        back_endpoint='transitions_ecology',
    )


@app.route('/transitions/charity')
def transitions_charity() -> str:
    return render_template(
        'transitions/charity.html',
        back_endpoint='transitions_awards',
    )


@app.route('/charity/2022')
def charity_2022() -> str:
    return render_template(
        'charity/2022.html',
        back_endpoint='transitions_charity',
    )


@app.route('/charity/2023')
def charity_2023() -> str:
    return render_template(
        'charity/2023.html',
        back_endpoint='transitions_charity',
    )


@app.route('/charity/2024')
def charity_2024() -> str:
    return render_template(
        'charity/2024.html',
        back_endpoint='transitions_charity',
    )


@app.route('/quiz')
def quiz() -> str:
    return render_template(
        'quiz.html',
        back_endpoint='transitions_general',
    )


if __name__ == '__main__':
    app.run(
        debug=Config.DEBUG,
        host=Config.HOST,
        port=Config.PORT,
    )
