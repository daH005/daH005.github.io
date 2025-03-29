from flask import (
    Flask,
    render_template,
    Response,
    redirect,
    url_for,
)

from config import Config
from data import alive_employees, dead_employees, trains, award_best_depo_years
from functions import take_before, take_after

app: Flask = Flask(__name__)


@app.route('/')
@app.route('/transitions/start')
def transitions_start() -> str:
    return render_template('transitions/start.html')


@app.route('/transitions/general')
def transitions_general() -> str:
    return render_template('transitions/general.html')


@app.route('/tour_3d')
def tour_3d() -> str:
    pass


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
    return render_template('transitions/awards.html')


@app.route('/awards/best_depo')
def awards_best_depo() -> str:
    return render_template(
        'awards/best_depo.html',
        back_endpoint='transitions_awards',
        years=award_best_depo_years,
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


@app.route('/awards/dynasties')
def awards_dynasties() -> str:
    pass


@app.route('/awards/ecology')
def awards_ecology() -> str:
    pass


@app.route('/awards/charity')
def awards_charity() -> str:
    pass


@app.route('/quiz')
def quiz() -> str:
    pass


if __name__ == '__main__':
    app.run(
        debug=Config.DEBUG,
        host=Config.HOST,
        port=Config.PORT,
    )
