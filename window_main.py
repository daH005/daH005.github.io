import sys
from PyQt5.QtCore import QUrl
from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5.QtWebEngineWidgets import QWebEngineView

if __name__ == '__main__':
    app = QApplication(sys.argv)

    window = QMainWindow()
    view = QWebEngineView()
    view.load(QUrl('http://localhost:8080'))
    window.setCentralWidget(view)
    window.showFullScreen()

    sys.exit(app.exec_())
