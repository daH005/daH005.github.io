pyinstaller main.py --onefile ^
                    --distpath ./ ^
                    --specpath ./_build_cache ^
                    --workpath ./_build_cache ^
                    --add-data "../templates;templates" ^
                    --add-data "../static;static" ^
                    --icon=../static/images/transitions/background.png ^
                    --name=SinaraSite
