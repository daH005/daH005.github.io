pyinstaller server_main.py --onefile ^
                           --distpath ./ ^
                           --specpath ./_build_cache ^
                           --workpath ./_build_cache ^
                           --name=SinaraServer

pyinstaller window_main.py --onefile ^
                           --distpath ./ ^
                           --specpath ./_build_cache ^
                           --workpath ./_build_cache ^
                           --icon=../static/images/logo_exe.png ^
                           --name=SinaraWindow
