require 'rack/scriptstacker'

class App
  def call env
    [
      200,
      { 'Content-Type' => 'text/html' },
      [
        File.read('client/html/index.html.erb')
      ]
    ]
  end
end

use Rack::ScriptStacker do
  directory 'static' do
    css 'css'
    javascript 'javascript'
    images 'images'
  end
end

run App.new
