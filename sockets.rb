require 'em-websocket'

EM.run do
  EM::WebSocket.run(host: 'localhost', port: 2345) do |ws|
    ws.onopen do |handshake|
      puts 'WebSocket connection open'

      # Access properties on the EM::WebSocket::Handshake object, e.g.
      # path, query_string, origin, headers

      # Publish message to the client
      ws.send "Hello Client, you connected to #{handshake.path}"
    end

    ws.onclose { puts 'Connection closed' }

    ws.onmessage do |msg|
      puts "Recieved message: #{msg}"
      ws.send "Pong: #{msg}"
    end
  end
end
